using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetById;

public sealed class GetByIdTicketTests
{
    [Fact]
    public async Task Should_get_by_id_ticket()
    {
        // Arrange
        var ticketReader = new Mock<ITicketReader>();

        // SUT (System Under Test)
        var handler = new GetByIdTicketHandler(ticketReader.Object);

        // ticketData
        var ticketData = new TicketData();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Prepare expected ticket data for assertion
        var expectedTicket = new GetByIdTicketResponse(ticketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(ticketData);

        // Mock Get by ID query
        var query = new GetByIdTicketQuery(ticketId);

        // Act
        var result = await handler.HandleAsync(
            query,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedTicket, result);

        // Test the dependencies were called as expected
        ticketReader.Verify(
            x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
