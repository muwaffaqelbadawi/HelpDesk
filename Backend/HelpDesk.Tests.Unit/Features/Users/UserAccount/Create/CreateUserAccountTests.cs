using HelpDesk.src.Features.Users.UserAccount.Create;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountTests
{
    [Fact]
    public async Task Should_create_user_account()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userRepository = Substitute.For<IUserRepository>();
        var userReader = Substitute.For<IUserReader>();
        var passwordGenerator = Substitute.For<ITemporaryPasswordGenerator>();
        var departmentRules = Substitute.For<IDepartmentRules>();
        var sectorRules = Substitute.For<ISectorRules>();
        var countryRules = Substitute.For<ICountryRules>();
        var phoneNumberRules = Substitute.For<IPhoneNumberRules>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var applicationOptions = Substitute.For<IApplicationOptions>();
        var queueEmailService = Substitute.For<IQueueEmailService>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext,
            userRepository,
            userReader,
            passwordGenerator,
            departmentRules,
            sectorRules,
            countryRules,
            phoneNumberRules,
            numberingService,
            dateTimeService,
            applicationOptions,
            dispatcher,
            logger);

        // Mock user context to return a specific user admin ID
        var currentUserId = Guid.NewGuid();

        userContext.GuidUserId.Returns(currentUserId);

        // Mock numbering service to return a specific employee number
        var employeeNumber = "123456";

        numberingService.GetNextEmployeeNumberAsync(
                Arg.Any<CancellationToken>())
            .Returns(employeeNumber);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset(
            2026, 8, 13, 14, 30, 0,
            TimeSpan.Zero);

        dateTimeService.UtcNow.Returns(now);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .IsActiveAsync(
                countryId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .IsActiveAsync(
                departmentId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .IsActiveAsync(
                sectorId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = "+966112345678";

        phoneNumberRules
            .IsValidPhoneNumber(phoneNumber)
            .Returns(true);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: "johndoe",
            Email: "johndoe@example.com",
            PhoneNumber: phoneNumber,
            FullEnName: "John Doe",
            FullArName: "جون دو",
            JobTitle: "Software engineer",
            DepartmentId: departmentId,
            CountryId: countryId,
            SectorId: sectorId);

        // Variable to capture the created employee and user
        Employee? createdEmployee = null;
        ApplicationUser? createdUser = null;

        // Mock user repository to capture the user being added
        userRepository
            .When(x => x.AddAsync(
                Arg.Any<ApplicationUser>(),
                Arg.Any<Employee>(),
                Arg.Any<string>(),
                Arg.Any<CancellationToken>()))
            .Do(callInfo =>
            {
                createdEmployee = callInfo.Arg<Employee>();
                createdUser = callInfo.Arg<ApplicationUser>();
            });

        // Prepare expected user account data for assertion
        var expectedUserAccountData = new UserAccountData
        {
            UserName = command.UserName,
            Email = command.Email,
            MustChangePassword = true,
            Employee = new EmployeeData
            {
                EmployeeNumber = employeeNumber,
                FullEnName = command.FullEnName,
                FullArName = command.FullArName,
                Department = string.Empty,
                Sector = string.Empty,
                Country = string.Empty,
            }
        };

        // Mock user reader to return the expected user account data
        userReader
            .GetByIdAsync(
                Arg.Any<Guid>(),
                Arg.Any<CancellationToken>())
            .Returns(expectedUserAccountData);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify that the created employee
        Assert.Equal(employeeNumber, createdEmployee!.Number);
        Assert.Equal(command.FullEnName, createdEmployee.FullEnName);
        Assert.Equal(command.FullArName, createdEmployee.FullArName);
        Assert.Equal(EmployeeStatusIds.Active, createdEmployee.StatusId);
        Assert.Equal(currentUserId, createdEmployee.CreatedById);
        Assert.Equal(departmentId, createdEmployee.DepartmentId);
        Assert.Equal(sectorId, createdEmployee.SectorId);
        Assert.Equal(countryId, createdEmployee.CountryId);
        Assert.Equal(now, createdEmployee.CreatedAt);

        // Verify that the created user
        Assert.Equal(command.UserName, createdUser!.UserName);
        Assert.Equal(command.Email, createdUser.Email);
        Assert.Equal(command.PhoneNumber, createdUser.PhoneNumber);
        Assert.Equal(UserStatusIds.Active, createdUser.StatusId);
        Assert.Null(createdUser.LastPasswordChangedAt);
        Assert.True(createdUser.MustChangePassword);
        Assert.Equal(currentUserId, createdUser.CreatedById);
        Assert.Equal(now, createdUser.CreatedAt);

        // Verify the output
        Assert.Equal(expectedUserAccountData, result.UserAccountData);

        // Test the dependencies were called as expected
        await userRepository.Received(1).AddAsync(
            Arg.Any<ApplicationUser>(),
            Arg.Any<Employee>(),
            Arg.Any<string>(),
            Arg.Any<CancellationToken>());

        await userReader.Received(1).GetByIdAsync(
            createdUser.Id,
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task Should_reject_inactive_department()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userRepository = Substitute.For<IUserRepository>();
        var userReader = Substitute.For<IUserReader>();
        var passwordGenerator = Substitute.For<ITemporaryPasswordGenerator>();
        var departmentRules = Substitute.For<IDepartmentRules>();
        var sectorRules = Substitute.For<ISectorRules>();
        var countryRules = Substitute.For<ICountryRules>();
        var phoneNumberRules = Substitute.For<IPhoneNumberRules>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var applicationOptions = Substitute.For<IApplicationOptions>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext,
            userRepository,
            userReader,
            passwordGenerator,
            departmentRules,
            sectorRules,
            countryRules,
            phoneNumberRules,
            numberingService,
            dateTimeService,
            applicationOptions,
            dispatcher,
            logger);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .IsActiveAsync(
                departmentId,
                Arg.Any<CancellationToken>())
            .Returns(false);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .IsActiveAsync(
                sectorId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .IsActiveAsync(
                countryId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = "+966112345678";

        phoneNumberRules
            .IsValidPhoneNumber(phoneNumber)
            .Returns(true);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: "johndoe",
            Email: "johndoe@example.com",
            PhoneNumber: phoneNumber,
            FullEnName: "John Doe",
            FullArName: "جون دو",
            JobTitle: "Software engineer",
            DepartmentId: departmentId,
            CountryId: countryId,
            SectorId: sectorId);

        // Act
        var ex = await Assert.ThrowsAsync<ValidationException>(
            () => handler.HandleAsync(command, CancellationToken.None));

        // Assert
        Assert.Contains("department", ex.Errors.Keys);
        Assert.Contains(
            "The selected department is unavailable.",
            ex.Errors["department"]);

        // Assert that AddAsync was not called
        await userRepository.DidNotReceive().AddAsync(
            Arg.Any<ApplicationUser>(),
            Arg.Any<Employee>(),
            Arg.Any<string>(),
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task Should_reject_inactive_sector()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userRepository = Substitute.For<IUserRepository>();
        var userReader = Substitute.For<IUserReader>();
        var passwordGenerator = Substitute.For<ITemporaryPasswordGenerator>();
        var departmentRules = Substitute.For<IDepartmentRules>();
        var sectorRules = Substitute.For<ISectorRules>();
        var countryRules = Substitute.For<ICountryRules>();
        var phoneNumberRules = Substitute.For<IPhoneNumberRules>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var applicationOptions = Substitute.For<IApplicationOptions>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext,
            userRepository,
            userReader,
            passwordGenerator,
            departmentRules,
            sectorRules,
            countryRules,
            phoneNumberRules,
            numberingService,
            dateTimeService,
            applicationOptions,
            dispatcher,
            logger);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .IsActiveAsync(
                departmentId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .IsActiveAsync(
                sectorId,
                Arg.Any<CancellationToken>())
            .Returns(false);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .IsActiveAsync(
                countryId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = "+966112345678";

        phoneNumberRules
            .IsValidPhoneNumber(phoneNumber)
            .Returns(true);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: "johndoe",
            Email: "johndoe@example.com",
            PhoneNumber: phoneNumber,
            FullEnName: "John Doe",
            FullArName: "جون دو",
            JobTitle: "Software engineer",
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
        await userRepository.DidNotReceive().AddAsync(
            Arg.Any<ApplicationUser>(),
            Arg.Any<Employee>(),
            Arg.Any<string>(),
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task Should_reject_inactive_country()
    {
        // Arrange
        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userRepository = Substitute.For<IUserRepository>();
        var userReader = Substitute.For<IUserReader>();
        var passwordGenerator = Substitute.For<ITemporaryPasswordGenerator>();
        var departmentRules = Substitute.For<IDepartmentRules>();
        var sectorRules = Substitute.For<ISectorRules>();
        var countryRules = Substitute.For<ICountryRules>();
        var phoneNumberRules = Substitute.For<IPhoneNumberRules>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var applicationOptions = Substitute.For<IApplicationOptions>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext,
            userRepository,
            userReader,
            passwordGenerator,
            departmentRules,
            sectorRules,
            countryRules,
            phoneNumberRules,
            numberingService,
            dateTimeService,
            applicationOptions,
            dispatcher,
            logger);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .IsActiveAsync(
                departmentId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .IsActiveAsync(
                sectorId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .IsActiveAsync(
                countryId,
                Arg.Any<CancellationToken>())
            .Returns(false);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = "+966112345678";

        phoneNumberRules
            .IsValidPhoneNumber(phoneNumber)
            .Returns(true);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: "johndoe",
            Email: "johndoe@example.com",
            PhoneNumber: phoneNumber,
            FullEnName: "John Doe",
            FullArName: "جون دو",
            JobTitle: "Software engineer",
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
        await userRepository.DidNotReceive().AddAsync(
            Arg.Any<ApplicationUser>(),
            Arg.Any<Employee>(),
            Arg.Any<string>(),
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task Should_reject_invalid_phone_number()
    {
        // Arrange
        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var userRepository = Substitute.For<IUserRepository>();
        var userReader = Substitute.For<IUserReader>();
        var passwordGenerator = Substitute.For<ITemporaryPasswordGenerator>();
        var departmentRules = Substitute.For<IDepartmentRules>();
        var sectorRules = Substitute.For<ISectorRules>();
        var countryRules = Substitute.For<ICountryRules>();
        var phoneNumberRules = Substitute.For<IPhoneNumberRules>();
        var numberingService = Substitute.For<INumberingService>();
        var dateTimeService = Substitute.For<IDateTimeService>();
        var applicationOptions = Substitute.For<IApplicationOptions>();
        var dispatcher = Substitute.For<IDomainEventDispatcher>();
        var logger = Substitute.For<ILogger<CreateUserAccountHandler>>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new CreateUserAccountHandler(
            userContext,
            userRepository,
            userReader,
            passwordGenerator,
            departmentRules,
            sectorRules,
            countryRules,
            phoneNumberRules,
            numberingService,
            dateTimeService,
            applicationOptions,
            dispatcher,
            logger);

        // What you want to test set to false.
        // other tests set to true.
        // to isolate the test case.

        // Mock DepartmentId service to return a specific department ID
        var departmentId = Guid.NewGuid();

        departmentRules
            .IsActiveAsync(
                departmentId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock SectorId service to return a specific sector ID
        var sectorId = Guid.NewGuid();

        sectorRules
            .IsActiveAsync(
                sectorId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock CountryId service to return a specific country ID
        var countryId = Guid.NewGuid();

        countryRules
            .IsActiveAsync(
                countryId,
                Arg.Any<CancellationToken>())
            .Returns(true);

        // Mock PhoneNumber service to return a specific phone number
        var phoneNumber = "+966112345678";

        phoneNumberRules
            .IsValidPhoneNumber(phoneNumber)
            .Returns(false);

        // Create a command with user account details
        var command = new CreateUserAccountCommand(
            UserName: "johndoe",
            Email: "johndoe@example.com",
            PhoneNumber: phoneNumber,
            FullEnName: "John Doe",
            FullArName: "جون دو",
            JobTitle: "Software engineer",
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
        await userRepository.DidNotReceive().AddAsync(
            Arg.Any<ApplicationUser>(),
            Arg.Any<Employee>(),
            Arg.Any<string>(),
            Arg.Any<CancellationToken>());
    }
}
