using HelpDesk.src.Features.Auth.Modules.GetMy;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Modules.GetMy;

public sealed class GetMyModulesTests
{
    [Fact]
    public async Task Should_get_my_modules()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var modulesReader = new Mock<IModulesReader>();
        var logger = new Mock<ILogger<GetMyModulesHandler>>();

        // SUT (System Under Test)
        var handler = new GetMyModulesHandler(
            userContext.Object,
            modulesReader.Object,
            logger.Object);

        // provide a concrete user id and configure the substitute
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // roles
        IReadOnlyCollection<string> roles = [];

        // response
        var response = new GetMyModulesResponse(roles);

        // expectedRoles
        var expectedRoles = response.Modules;

        // Mock ticket reader to return the expected ticket data
        modulesReader
            .Setup(x => x.GetUserModulesAsync(
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

        modulesReader.Verify(
            x => x.GetUserModulesAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
