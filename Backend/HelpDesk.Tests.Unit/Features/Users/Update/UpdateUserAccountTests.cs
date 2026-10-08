using HelpDesk.src.Features.Users.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Update;

public sealed class UpdateUserAccountTests
{
    [Fact]
    public async Task Should_update_user_account()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userProvider = new Mock<IUserProvider>();
        var userRepository = new Mock<IUserRepository>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<UpdateUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new UpdateUserAccountHandler(
            userContext.Object,
            userProvider.Object,
            userRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // Mock user context to return current user ID
        var currentUserId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(currentUserId);

        // Mock target user id (the account being updated)
        var userId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();
        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        // Mock user row version
        byte[] userRowVersion = [];

        // Mock employee row version
        byte[] employeeRowVersion = [];

        var userAccountRowVersionData = new UserAccountRowVersionData
        {
            UserRowVersion = userRowVersion,
            EmployeeRowVersion = employeeRowVersion
        };

        var userName = string.Empty;
        var email = string.Empty;
        var fullEnName = string.Empty;
        var fullArName = string.Empty;

        // Create command
        var command = new UpdateUserAccountCommand(
            UserId: userId,
            UserName: userName,
            Email: email,
            FullEnName: fullEnName,
            FullArName: fullArName,
            UserRowVersion: userRowVersion,
            EmployeeRowVersion: employeeRowVersion);

        // Configure repository and reader behavior
        userRepository
            .Setup(x => x.UpdateAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<string>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<byte[]>(),
                It.IsAny<byte[]>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(1));

        // Mock user reader to get new row version
        userReader
            .Setup(x => x.GetNewRowVersionAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(userAccountRowVersionData));

        // Mock a real user with the same userId
        var user = new ApplicationUser { Id = userId };

        // Mock user provider to return a valid user with the same userId
        userProvider
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(userRowVersion, result.UserRowVersion);
        Assert.Equal(employeeRowVersion, result.EmployeeRowVersion);

        userRepository.Verify(x => x.UpdateAsync(
            It.IsAny<Guid>(),
            It.IsAny<Guid>(),
            It.IsAny<string>(),
            It.IsAny<string>(),
            It.IsAny<string>(),
            It.IsAny<string>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<byte[]>(),
            It.IsAny<byte[]>(),
            It.IsAny<CancellationToken>()),
            Times.Once);

        // Assert
        userReader.Verify(
            x => x.GetNewRowVersionAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()),
            Times.Once);

        dispatcher.Verify(
            x => x.DispatchAsync(
                    It.IsAny<IDomainEvent>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
