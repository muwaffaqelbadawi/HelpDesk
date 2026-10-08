using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using HelpDesk.Tests.Unit.TestData;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Create;

public sealed class CreateUserAccountTests
{
    [Fact]
    public async Task Should_create_user_account()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var passwordGenerator = new Mock<ITemporaryPasswordGenerator>();
        var departmentRules = new Mock<IDepartmentRules>();
        var sectorRules = new Mock<ISectorRules>();
        var countryRules = new Mock<ICountryRules>();
        var phoneNumberRules = new Mock<IPhoneNumberRules>();
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var applicationOptions = new Mock<IApplicationOptions>();
        var queueEmailService = new Mock<IQueueEmailService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext.Object,
            userRepository.Object,
            userReader.Object,
            passwordGenerator.Object,
            departmentRules.Object,
            sectorRules.Object,
            countryRules.Object,
            phoneNumberRules.Object,
            numberingService.Object,
            dateTimeService.Object,
            applicationOptions.Object,
            dispatcher.Object,
            logger.Object);

        // Mock user context to return a specific user admin ID
        var currentUserId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(currentUserId);

        // Mock numbering service to return a specific employee number
        var employeeNumber = string.Empty;

        numberingService
            .Setup(x => x.GetNextEmployeeNumberAsync(It.IsAny<CancellationToken>()))
            .ReturnsAsync(employeeNumber);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .Setup(x => x.IsActiveAsync(
                countryId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .Setup(x => x.IsActiveAsync(
                departmentId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .Setup(x => x.IsActiveAsync(
                sectorId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = string.Empty;

        phoneNumberRules
            .Setup(x => x.IsValidPhoneNumber(phoneNumber))
            .Returns(true);

        var command = new CreateUserAccountCommand(
            UserName: string.Empty,
            Email: string.Empty,
            PhoneNumber: phoneNumber,
            FullEnName: string.Empty,
            FullArName: string.Empty,
            JobTitle: string.Empty,
            DepartmentId: departmentId,
            CountryId: countryId,
            SectorId: sectorId);

        // Variable to capture the created employee and user
        Employee createdEmployee = null!;
        ApplicationUser createdUser = null!;

        // Mock user repository to capture the user being added
        userRepository
            .Setup(x => x.AddAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<Employee>(),
                It.IsAny<string>(),
                It.IsAny<CancellationToken>()))
            .Callback<ApplicationUser, Employee, string, CancellationToken>(
                (user, employee, password, cancellationToken) =>
                {
                    createdEmployee = employee;
                    createdUser = user;
                });

        // Prepare expected user account data for assertion
        var expectedUserAccountData = new UserAccountData();

        // Mock user reader to return the expected user account data
        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedUserAccountData);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify that the created employee
        Assert.Equal(employeeNumber, createdEmployee.Number);
        Assert.Equal(command.FullEnName, createdEmployee.FullEnName);
        Assert.Equal(command.FullArName, createdEmployee.FullArName);
        Assert.Equal(currentUserId, createdEmployee.CreatedById);
        Assert.Equal(sectorId, createdEmployee.SectorId);
        Assert.Equal(countryId, createdEmployee.CountryId);
        Assert.Equal(now, createdEmployee.CreatedAt);

        // Verify that the created user
        Assert.Equal(command.UserName, createdUser.UserName);
        Assert.Equal(command.Email, createdUser.Email);
        Assert.Equal(command.PhoneNumber, createdUser.PhoneNumber);
        Assert.Equal(UserStatusIds.Active, createdUser.StatusId);
        Assert.Null(createdUser.LastPasswordChangedAt);
        Assert.True(createdUser.MustResetPassword);
        Assert.Equal(currentUserId, createdUser.CreatedById);
        Assert.Equal(now, createdUser.CreatedAt);

        // Verify the output
        Assert.Equal(expectedUserAccountData, result.UserAccountData);

        // Test the dependencies were called as expected
        userRepository.Verify(

            x => x.AddAsync(
                    It.IsAny<ApplicationUser>(),
                    It.IsAny<Employee>(),
                    It.IsAny<string>(),
                    It.IsAny<CancellationToken>()),
                Times.Once());

        userReader.Verify(
            x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()),
                Times.Once());
    }

    [Fact]
    public async Task Should_reject_inactive_department()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var passwordGenerator = new Mock<ITemporaryPasswordGenerator>();
        var departmentRules = new Mock<IDepartmentRules>();
        var sectorRules = new Mock<ISectorRules>();
        var countryRules = new Mock<ICountryRules>();
        var phoneNumberRules = new Mock<IPhoneNumberRules>();
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var applicationOptions = new Mock<IApplicationOptions>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new CreateUserAccountHandler(
            userContext.Object,
            userRepository.Object,
            userReader.Object,
            passwordGenerator.Object,
            departmentRules.Object,
            sectorRules.Object,
            countryRules.Object,
            phoneNumberRules.Object,
            numberingService.Object,
            dateTimeService.Object,
            applicationOptions.Object,
            dispatcher.Object,
            logger.Object);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .Setup(x => x.IsActiveAsync(
                departmentId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(false);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .Setup(x => x.IsActiveAsync(
                sectorId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .Setup(x => x.IsActiveAsync(
                countryId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = string.Empty;

        phoneNumberRules
            .Setup(x => x.IsValidPhoneNumber(phoneNumber))
            .Returns(true);

        // Create a command with user account details
        var command = UserTestData.CreateUserCommand(countryId);

        // Act
        var ex = await Assert.ThrowsAsync<ValidationException>(
            () => handler.HandleAsync(command, CancellationToken.None));

        // Assert
        Assert.Contains("department", ex.Errors.Keys);
        Assert.Contains(
            "The selected department is unavailable.",
            ex.Errors["department"]);

        // Assert that AddAsync was not called
        userRepository.Verify(
            x => x.AddAsync(
                    It.IsAny<ApplicationUser>(),
                    It.IsAny<Employee>(),
                    It.IsAny<string>(),
                    It.IsAny<CancellationToken>()),
                Times.Never());
    }

    [Fact]
    public async Task Should_reject_inactive_sector()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var passwordGenerator = new Mock<ITemporaryPasswordGenerator>();
        var departmentRules = new Mock<IDepartmentRules>();
        var sectorRules = new Mock<ISectorRules>();
        var countryRules = new Mock<ICountryRules>();
        var phoneNumberRules = new Mock<IPhoneNumberRules>();
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var applicationOptions = new Mock<IApplicationOptions>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new CreateUserAccountHandler(
            userContext.Object,
            userRepository.Object,
            userReader.Object,
            passwordGenerator.Object,
            departmentRules.Object,
            sectorRules.Object,
            countryRules.Object,
            phoneNumberRules.Object,
            numberingService.Object,
            dateTimeService.Object,
            applicationOptions.Object,
            dispatcher.Object,
            logger.Object);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .Setup(x => x.IsActiveAsync(
                departmentId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .Setup(x => x.IsActiveAsync(
                sectorId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(false);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .Setup(x => x.IsActiveAsync(
                countryId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = string.Empty;

        phoneNumberRules
            .Setup(x => x.IsValidPhoneNumber(phoneNumber))
            .Returns(true);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: string.Empty,
            Email: string.Empty,
            PhoneNumber: phoneNumber,
            FullEnName: string.Empty,
            FullArName: string.Empty,
            JobTitle: string.Empty,
            DepartmentId: departmentId,
            CountryId: countryId,
            SectorId: sectorId);

        // Act
        var ex = await Assert.ThrowsAsync<ValidationException>(
            () => handler.HandleAsync(command, CancellationToken.None));

        // Assert
        Assert.Contains("sector", ex.Errors.Keys);

        Assert.Contains(
            "The selected sector is unavailable.",
            ex.Errors["sector"]);

        // Assert that AddAsync was not called
        userRepository.Verify(
            x => x.AddAsync(
            It.IsAny<ApplicationUser>(),
            It.IsAny<Employee>(),
            It.IsAny<string>(),
            It.IsAny<CancellationToken>()),
        Times.Never());
    }

    [Fact]
    public async Task Should_reject_inactive_country()
    {
        // Arrange
        // Mock dependencies (substitutes)
        var userContext = new Mock<IUserContext>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var passwordGenerator = new Mock<ITemporaryPasswordGenerator>();
        var departmentRules = new Mock<IDepartmentRules>();
        var sectorRules = new Mock<ISectorRules>();
        var countryRules = new Mock<ICountryRules>();
        var phoneNumberRules = new Mock<IPhoneNumberRules>();
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var applicationOptions = new Mock<IApplicationOptions>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new CreateUserAccountHandler(
            userContext.Object,
            userRepository.Object,
            userReader.Object,
            passwordGenerator.Object,
            departmentRules.Object,
            sectorRules.Object,
            countryRules.Object,
            phoneNumberRules.Object,
            numberingService.Object,
            dateTimeService.Object,
            applicationOptions.Object,
            dispatcher.Object,
            logger.Object);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .Setup(x => x.IsActiveAsync(
                departmentId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .Setup(x => x.IsActiveAsync(
                sectorId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .Setup(x => x.IsActiveAsync(
                countryId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(false);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = string.Empty;

        phoneNumberRules
            .Setup(x => x.IsValidPhoneNumber(phoneNumber))
            .Returns(true);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: string.Empty,
            Email: string.Empty,
            PhoneNumber: phoneNumber,
            FullEnName: string.Empty,
            FullArName: string.Empty,
            JobTitle: string.Empty,
            DepartmentId: departmentId,
            CountryId: countryId,
            SectorId: sectorId);

        // Act
        var ex = await Assert.ThrowsAsync<ValidationException>(
            () => handler.HandleAsync(command, CancellationToken.None));

        // Assert
        Assert.Contains("country", ex.Errors.Keys);

        Assert.Contains(
            "The selected country is unavailable.",
            ex.Errors["country"]);

        // Assert that AddAsync was not called
        userRepository.Verify(
            x => x.AddAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<Employee>(),
                It.IsAny<string>(),
                It.IsAny<CancellationToken>()),
            Times.Never);
    }

    [Fact]
    public async Task Should_reject_invalid_phone_number()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var passwordGenerator = new Mock<ITemporaryPasswordGenerator>();
        var departmentRules = new Mock<IDepartmentRules>();
        var sectorRules = new Mock<ISectorRules>();
        var countryRules = new Mock<ICountryRules>();
        var phoneNumberRules = new Mock<IPhoneNumberRules>();
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
        var applicationOptions = new Mock<IApplicationOptions>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new CreateUserAccountHandler(
            userContext.Object,
            userRepository.Object,
            userReader.Object,
            passwordGenerator.Object,
            departmentRules.Object,
            sectorRules.Object,
            countryRules.Object,
            phoneNumberRules.Object,
            numberingService.Object,
            dateTimeService.Object,
            applicationOptions.Object,
            dispatcher.Object,
            logger.Object);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .Setup(x => x.IsActiveAsync(
                departmentId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .Setup(x => x.IsActiveAsync(
                sectorId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .Setup(x => x.IsActiveAsync(
                countryId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = string.Empty;

        phoneNumberRules
            .Setup(x => x.IsValidPhoneNumber(phoneNumber))
            .Returns(false);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: string.Empty,
            Email: string.Empty,
            PhoneNumber: phoneNumber,
            FullEnName: string.Empty,
            FullArName: string.Empty,
            JobTitle: string.Empty,
            DepartmentId: departmentId,
            CountryId: countryId,
            SectorId: sectorId);

        // Act
        var ex = await Assert.ThrowsAsync<ValidationException>(
            () => handler.HandleAsync(command, CancellationToken.None));

        // Assert
        Assert.Contains("phoneNumber", ex.Errors.Keys);

        Assert.Contains(
            "The entered phone number is invalid.",
            ex.Errors["phoneNumber"]);

        // Assert that AddAsync was not called
        userRepository.Verify(
            x => x.AddAsync(
            It.IsAny<ApplicationUser>(),
            It.IsAny<Employee>(),
            It.IsAny<string>(),
            It.IsAny<CancellationToken>()),
            Times.Never);
    }
}
