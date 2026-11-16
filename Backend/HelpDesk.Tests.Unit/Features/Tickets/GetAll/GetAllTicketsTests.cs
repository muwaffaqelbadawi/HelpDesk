using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAll;

public sealed class GetAllTicketsTests
{
    [Fact]
    public async Task Should_get_all_tickets()
    {
        // Arrange
        var ticketReader = new Mock<ITicketReader>();

        // SUT (System Under Test)
        var handler = new GetTicketsHandler(ticketReader.Object);

        var queryParameters = new QueryParameters
        {
            PageNumber = 1,
            PageSize = 10,
        };

        // Prepare expected ticket data for assertion
        var expectedTicketData = new PagedResult<TicketData>(
            Items: new List<TicketData>(),
            PageNumber: queryParameters.PageNumber,
            PageSize: queryParameters.PageSize,
            TotalCount: 0,
            TotalPages: 0);

        var getTicketsResponse = new GetTicketsResponse(expectedTicketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(x => x.GetAllAsync(
                It.IsAny<QueryParameters>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedTicketData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            new QueryParameters(),
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);

        Assert.Equal(
            getTicketsResponse,
            result);

        ticketReader.Verify(
            x => x.GetAllAsync(
            It.IsAny<QueryParameters>(),
            It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
