using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAll;

public sealed class GetAllTicketsTests
{
    [Fact]
    public async Task Should_get_all_tickets()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var ticketReader = Substitute.For<ITicketReader>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new GetTicketsHandler(ticketReader);

        // Prepare expected ticket data for assertion
        var expectedTicketData = new PagedResult<TicketData>(
            Items: [],
            PageNumber: 1,
            PageSize: 10,
            TotalCount: 0,
            TotalPages: 0);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetAllAsync(
                Arg.Any<GetTicketsParameters>(),
                Arg.Any<CancellationToken>())
            .Returns(expectedTicketData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            new GetTicketsParameters(),
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedTicketData, result);

        // Test the dependencies were called as expected
        await ticketReader.Received(1).GetAllAsync(
            Arg.Any<GetTicketsParameters>(),
            Arg.Any<CancellationToken>());
    }
}
