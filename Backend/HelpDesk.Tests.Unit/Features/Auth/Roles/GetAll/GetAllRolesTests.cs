using HelpDesk.src.Features.Auth.Roles.GetAll;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Roles.GetAll;

public sealed class GetAllRolesTests
{
    [Fact]
    public async Task Should_get_all_user_roles()
    {
        // Arrange
        var rolesReader = new Mock<IRolesReader>();
        var logger = new Mock<ILogger<GetAllUserRolesHandler>>();

        // SUT (System Under Test)
        var handler = new GetAllUserRolesHandler(
            rolesReader.Object,
            logger.Object);

        IReadOnlyCollection<string> roles = [];
        var response = new GetAllUserRolesResponse(roles);
        var expectedRoles = response.Roles;

        // Mock roles reader to return the expected roles data
        rolesReader
            .Setup(x => x.GetUserRolesAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedRoles);

        // user ID
        var userId = Guid.NewGuid();

        // query
        var query = new GetAllUserRolesQuery(userId);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            query,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(response, result);

        rolesReader.Verify(
            x => x.GetUserRolesAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
