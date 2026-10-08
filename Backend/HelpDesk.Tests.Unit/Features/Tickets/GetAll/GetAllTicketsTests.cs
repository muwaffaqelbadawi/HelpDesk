using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAll;

public sealed class GetAllTicketsTests
{
    [Fact]
    public async Task Should_get_all_tickets()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var ticketReader = new Mock<ITicketReader>();

        // SUT (System Under Test)
        var handler = new GetTicketsHandler(ticketReader.Object);

        // Prepare expected ticket data for assertion
        var expectedTicketData = new PagedResult<TicketData>(
            Items: [],
            PageNumber: 1,
            PageSize: 10,
            TotalCount: 0,
            TotalPages: 0);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(x => x.GetAllAsync(
                It.IsAny<GetTicketsParameters>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(expectedTicketData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            new GetTicketsParameters(),
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expectedTicketData, result);

        ticketReader.Verify(
            x => x.GetAllAsync(
            It.IsAny<GetTicketsParameters>(),
            It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
