using HelpDesk.src.Features.Users.GetMy;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.GetMy;

public sealed class GetMyUserAccountTests
{
    [Fact]
    public async Task Should_get_my_user_account()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var logger = new Mock<ILogger<GetMyUserAccountHandler>>();

        // SUT (System Under Test)
        var handler = new GetMyUserAccountHandler(
            userContext.Object,
            userReader.Object,
            logger.Object);

        // userAccountData
        var userAccountData = new UserAccountData();

        // userId
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // Prepare expected user data for assertion
        var expectedUser = new GetMyUserAccountResponse(userAccountData);

        // Mock user reader to return the expected user account data
        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        // Act
        var result = await handler.HandleAsync(CancellationToken.None);

        // Assert
        Assert.NotNull(result);

        Assert.Equal(expectedUser, result);

        userReader.Verify(
            x => x.GetByIdAsync(
            It.IsAny<Guid>(),
            It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
