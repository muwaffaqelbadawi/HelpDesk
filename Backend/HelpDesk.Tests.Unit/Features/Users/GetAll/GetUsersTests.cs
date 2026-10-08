using HelpDesk.src.Features.Users.GetAll;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.GetAll;

public sealed class GetUsersTests
{
    [Fact]

    public async Task Should_get_users()
    {
        // Arrange
        var userReader = new Mock<IUserReader>();

        // SUT (System Under Test)
        var handler = new GetUsersAccountHandler(userReader.Object);

        // Prepare expected user data for assertion
        var expectedUserData = new PagedResult<UserAccountData>(
            Items: [],
            PageNumber: 1,
            PageSize: 10,
            TotalCount: 1,
            TotalPages: 1);

        // Mock user reader to return the expected user data
        userReader
            .Setup(x => x.GetAllAsync(
                It.IsAny<GetUsersParameters>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedUserData);

        // Act
        var result = await handler.HandleAsync(
            new GetUsersParameters(),
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);

        Assert.Equal(expectedUserData, result);

        userReader.Verify(
            x => x.GetAllAsync(
                It.IsAny<GetUsersParameters>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
