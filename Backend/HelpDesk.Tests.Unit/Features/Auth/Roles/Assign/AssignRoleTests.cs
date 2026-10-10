using HelpDesk.src.Features.Auth.Roles.Assign;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Roles.Assign;

public sealed class AssignRoleTests
{
    [Fact]
    public async Task Should_assign_role()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userProvider = new Mock<IUserProvider>();
        var rolesRepository = new Mock<IRolesRepository>();
        var dateTimeService = new Mock<IDateTimeService>();
        var userReader = new Mock<IUserReader>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<AssignRoleHandler>>();

        // SUT (System Under Test)
        var handler = new AssignRoleHandler(
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

        // Assign a command with role details
        var command = new AssignRoleCommand(
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

        // Assign a command with role details
        rolesRepository
            .Setup(x => x.AddAsync(
                It.IsAny<ApplicationUserRole>(),
                It.IsAny<CancellationToken>()))
            .Returns(Task.CompletedTask);

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
