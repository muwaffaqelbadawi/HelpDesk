using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAll;

public class GetTicketsHandlerTests
{
    [Fact]
    public async Task Should_get_tickets()
    {
        // Arrange
        var ticketReader = Substitute.For<ITicketReader>();
        var handler = new GetTicketsHandler(ticketReader);

        var query = new PagedQuery
        {
            PageNumber = 1,
            PageSize = 20
        };

        var expected = new PagedResult<TicketData>(
            Items: [],
            PageNumber: 1,
            PageSize: 20,
            TotalCount: 1,
            TotalPages: 1);

        ticketReader
            .GetAllAsync(
                query,
                Arg.Any<CancellationToken>())
            .Returns(expected);

        // Act
        var result = await handler.HandleAsync(
            query,
            CancellationToken.None);

        // Assert
        Assert.Equal(expected, result);

        await ticketReader.Received(1).GetAllAsync(
            query,
            Arg.Any<CancellationToken>());
    }
}
