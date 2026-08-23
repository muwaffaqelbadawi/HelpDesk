using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAll;

public sealed class GetTicketsHandlerTests
{
    [Fact]
    public async Task Should_get_tickets()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var ticketReader = Substitute.For<ITicketReader>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new GetTicketsHandler(ticketReader);

        // Query parameters
        var query = new GetTicketsQuery();

        // Prepare expected ticket data for assertion
        var expectedTicketData = new PagedResult<TicketData>(
            Items: [],
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: 1,
            TotalPages: 1);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetAllAsync(
                query,
                Arg.Any<CancellationToken>())
            .Returns(expectedTicketData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            query,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedTicketData, result);

        // Test the dependencies were called as expected
        await ticketReader.Received(1).GetAllAsync(
            query,
            Arg.Any<CancellationToken>());
    }
}
