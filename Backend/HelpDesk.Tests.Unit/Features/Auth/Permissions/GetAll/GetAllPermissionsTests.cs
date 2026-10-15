using HelpDesk.src.Features.Auth.Permissions.GetAll;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Permissions.GetAll;

public sealed class GetAllPermissionsTests
{
    [Fact]
    public async Task Should_get_all_user_permissions()
    {
        // Arrange
        var permissionsReader = new Mock<IPermissionsReader>();
        var logger = new Mock<ILogger<GetAllUserPermissionsHandler>>();

        // SUT (System Under Test)
        var handler = new GetAllUserPermissionsHandler(
            permissionsReader.Object,
            logger.Object);

        // permissions
        IReadOnlyCollection<string> permissions = [];

        // response
        var response = new GetAllUserPermissionsResponse(permissions);

        // expectedPermissions
        var expectedPermissions = response.Permissions;

        // Mock permissions reader to return the expected permissions data
        permissionsReader
            .Setup(x => x.GetUserPermissionsAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedPermissions);

        // user ID
        var userId = Guid.NewGuid();

        // query
        var query = new GetAllUserPermissionsQuery(userId);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            query,
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
