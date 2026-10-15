using HelpDesk.src.Features.Auth.Modules.GetAll;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Modules.GetAll;

public sealed class GetAllModulesTests
{
    [Fact]
    public async Task Should_get_all_user_modules()
    {
        // Arrange
        var modulesReader = new Mock<IModulesReader>();
        var logger = new Mock<ILogger<GetAllUserModulesHandler>>();

        // SUT (System Under Test)
        var handler = new GetAllUserModulesHandler(
            modulesReader.Object,
            logger.Object);

        // modules
        IReadOnlyCollection<string> modules = [];

        // response
        var response = new GetAllUserModulesResponse(modules);

        // expectedModules
        var expectedModules = response.Modules;

        // Mock modules reader to return the expected modules data
        modulesReader
            .Setup(x => x.GetUserModulesAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedModules);

        // user ID
        var userId = Guid.NewGuid();

        // query
        var query = new GetAllUserModulesQuery(userId);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            query,
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
