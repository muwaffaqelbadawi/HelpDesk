using HelpDesk.src.Features.Auth.Roles.GetMy;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Roles.GetMy;

public sealed class GetMyRolesTests
{
    [Fact]
    public async Task Should_get_my_roles()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var roleReader = new Mock<IRolesReader>();
        var logger = new Mock<ILogger<GetMyRolesHandler>>();

        // SUT (System Under Test)
        var handler = new GetMyRolesHandler(
            userContext.Object,
            roleReader.Object,
            logger.Object);

        // provide a concrete user id and configure the substitute
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        IReadOnlyCollection<string> roles = [];
        var response = new GetMyRolesResponse(roles);
        var expectedRoles = response.Roles;

        // Mock ticket reader to return the expected ticket data
        roleReader
            .Setup(x => x.GetUserRolesAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedRoles);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(response, result);

        roleReader.Verify(
            x => x.GetUserRolesAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
