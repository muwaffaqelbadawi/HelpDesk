using HelpDesk.src.Features.Users.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Delete;

public sealed class DeleteUserAccountTests
{
    [Fact]
    public async Task Should_delete_user_account()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userProvider = new Mock<IUserProvider>();
        var userRepository = new Mock<IUserRepository>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<DeleteUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new DeleteUserAccountHandler(
            userContext.Object,
            userProvider.Object,
            userRepository.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // Mock user context to return current user ID
        var currentUserId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(currentUserId);

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // Mock userId to be deleted
        var userId = Guid.NewGuid();

        // Mock a real user with the same userId
        var user = new ApplicationUser { Id = userId };

        // Mock user provider to return a valid user with the same userId
        userProvider
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Mock user row version
        byte[] userRowVersion = [];

        // Mock employee row version
        byte[] employeeRowVersion = [];

        // Mock DeleteUserCommand
        var command = new DeleteUserAccountCommand(
            userId,
            userRowVersion,
            employeeRowVersion);

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        userRepository.Verify(
            x => x.DeleteAsync(
                It.Is<ApplicationUser>(u => u == user),
                It.Is<Guid>(u => u == currentUserId),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()),
            Times.Once);

        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
