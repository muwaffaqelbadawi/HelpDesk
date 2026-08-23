using HelpDesk.src.Features.Users.UserAccount.GetAll;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.UserAccount.GetAll;

public sealed class GetUsersHandlerTests
{
    [Fact]

    public async Task Should_get_users()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userReader = Substitute.For<IUserReader>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new GetUsersAccountHandler(userReader);

        // Query parameters
        var query = new GetUsersQuery();

        // Prepare expected user data for assertion
        var expectedUserData = new PagedResult<UserAccountData>(
            Items: [],
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: 1,
            TotalPages: 1);

        // Mock user reader to return the expected user data
        userReader
            .GetAllAsync(
                query,
                Arg.Any<CancellationToken>())
            .Returns(expectedUserData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            query,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedUserData, result);

        // Test the dependencies were called as expected
        await userReader.Received(1).GetAllAsync(
            query,
            Arg.Any<CancellationToken>());
    }
}
