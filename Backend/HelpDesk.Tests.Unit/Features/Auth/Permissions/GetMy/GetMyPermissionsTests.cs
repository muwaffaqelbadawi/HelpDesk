using HelpDesk.src.Features.Auth.Permissions.GetMy;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Permissions.GetMy;

public sealed class GetMyPermissionsTests
{
    [Fact]
    public async Task Should_get_my_permissions()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var permissionsReader = new Mock<IPermissionsReader>();
        var logger = new Mock<ILogger<GetMyPermissionsHandler>>();

        // SUT (System Under Test)
        var handler = new GetMyPermissionsHandler(
            userContext.Object,
            permissionsReader.Object,
            logger.Object);

        // provide a concrete user id and configure the substitute
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // roles
        IReadOnlyCollection<string> roles = [];

        // response
        var response = new GetMyPermissionsResponse(roles);

        // expectedRoles
        var expectedRoles = response.Permissions;

        // Mock ticket reader to return the expected ticket data
        permissionsReader
            .Setup(x => x.GetUserPermissionsAsync(
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

        permissionsReader.Verify(
            x => x.GetUserPermissionsAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}