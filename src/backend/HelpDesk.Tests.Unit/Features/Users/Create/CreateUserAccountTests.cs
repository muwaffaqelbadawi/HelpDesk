using HelpDesk.Features.Users.Create;
using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.Interfaces;
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
        var numberingService = new Mock<INumberingService>();
        var dateTimeService = new Mock<IDateTimeService>();
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
            numberingService.Object,
            dateTimeService.Object,
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

        var command = new CreateUserAccountCommand(
            UserName: string.Empty,
            Email: string.Empty,
            FullEnName: string.Empty,
            FullArName: string.Empty);

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
        Assert.Equal(now, createdEmployee.CreatedAt);

        // Verify that the created user
        Assert.Equal(command.UserName, createdUser.UserName);
        Assert.Equal(command.Email, createdUser.Email);
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
}
