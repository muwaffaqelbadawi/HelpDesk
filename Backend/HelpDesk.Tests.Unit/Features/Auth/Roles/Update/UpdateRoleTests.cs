using HelpDesk.src.Features.Auth.Roles.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Roles.Update;

public sealed class UpdateRoleTests
{
    [Fact]
    public async Task Should_update_role()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userProvider = new Mock<IUserProvider>();
        var rolesRepository = new Mock<IRolesRepository>();
        var dateTimeService = new Mock<IDateTimeService>();
        var userReader = new Mock<IUserReader>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<UpdateRoleHandler>>();

        // SUT (System Under Test)
        var handler = new UpdateRoleHandler(
            userContext.Object,
            userProvider.Object,
            rolesRepository.Object,
            dateTimeService.Object,
            userReader.Object,
            dispatcher.Object,
            logger.Object);

        // provide a concrete current user id and configure the substitute
        var currentUserId = Guid.NewGuid();

        userContext
            .SetupGet(x => x.GuidUserId)
            .Returns(currentUserId);

        // Create new role ID
        var roleId = Guid.NewGuid();

        // create new user ID
        var userId = Guid.NewGuid();

        // create new clock
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // Update a command with role details
        var command = new UpdateRoleCommand(
            userId,
            roleId);

        // Mock role repository to capture the role being updated
        // And return 0 to simulate that the role does not exist
        rolesRepository
            .Setup(x => x.UpdateAsync(
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<Guid>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.FromResult(1));

        // create new user account data
        var userAccountData = new UserAccountData();

        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        // Create user returned by the provider
        var user = new ApplicationUser();

        // Mock user provider to return the expected user
        userProvider
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        rolesRepository.Verify(
            x => x.UpdateAsync(
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
