using HelpDesk.Features.Users.GetById;
using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.GetById;

public sealed class GetByIdUserAccountTests
{
    [Fact]
    public async Task Should_get_by_id_user_account()
    {
        // Arrange
        var userReader = new Mock<IUserReader>();
        var logger = new Mock<ILogger<GetByIdUserHandler>>();

        // SUT (System Under Test)
        var handler = new GetByIdUserHandler(
            userReader.Object,
            logger.Object);

        // userAccountData
        var userAccountData = new UserAccountData();

        // Prepare expected user data for assertion
        var expectedUser = new GetByIdUserResponse(userAccountData);

        // Mock user reader to return the expected user account data
        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        // Act
        var result = await handler.HandleAsync(
            new GetByIdUserQuery(Guid.NewGuid()),
            CancellationToken.None);

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
