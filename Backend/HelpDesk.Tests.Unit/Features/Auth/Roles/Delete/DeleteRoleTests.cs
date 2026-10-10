using HelpDesk.src.Features.Auth.Roles.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Roles.Delete;

public sealed class DeleteRoleTests
{
    [Fact]
    public async Task Should_delete_role()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userProvider = new Mock<IUserProvider>();
        var rolesRepository = new Mock<IRolesRepository>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<DeleteRoleHandler>>();

        // SUT (System Under Test)
        var handler = new DeleteRoleHandler(
            userContext.Object,
            userProvider.Object,
            rolesRepository.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // provide a concrete current user id and configure the substitute
        var currentUserId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(currentUserId);

        // create new user ID
        var userId = Guid.NewGuid();

        // Create new role ID
        var roleId = Guid.NewGuid();

        // create new clock
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // Delete a command with role details
        var command = new DeleteRoleCommand(
            userId,
            roleId);

        // Mock role repository to capture the role being deleted
        // And return 0 to simulate that the role does not exist
        rolesRepository
            .Setup(x => x.DeleteAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(1));

        // Create user returned by the provider
        var user = new ApplicationUser();

        // Mock user provider to return the expected user
        userProvider
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        rolesRepository.Verify(
            x => x.DeleteAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
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
