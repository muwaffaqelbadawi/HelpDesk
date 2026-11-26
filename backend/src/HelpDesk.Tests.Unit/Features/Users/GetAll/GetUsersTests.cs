using HelpDesk.Features.Users.GetAll;
using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Pagination;
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
        var handler = new GetAllUsersAccountHandler(userReader.Object);

        var queryParameters = new QueryParameters
        {
            PageNumber = 1,
            PageSize = 10,
        };

        // Prepare expected user data for assertion
        var expectedUserData = new PagedResult<UserAccountData>(
            Items: new List<UserAccountData>(),
            PageNumber: queryParameters.PageNumber,
            PageSize: queryParameters.PageSize,
            TotalCount: 0,
            TotalPages: 0);

        var getUsersResponse = new GetAllUsersResponse(expectedUserData);

        // Mock user reader to return the expected user data
        userReader
            .Setup(x => x.GetAllAsync(
                It.IsAny<QueryParameters>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedUserData);

        // Act
        var result = await handler.HandleAsync(
            new QueryParameters(),
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);

        Assert.Equal(
            getUsersResponse,
            result);

        userReader.Verify(
            x => x.GetAllAsync(
                It.IsAny<QueryParameters>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
