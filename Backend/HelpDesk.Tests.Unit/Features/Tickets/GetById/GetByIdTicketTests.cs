using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetById;

public sealed class GetByIdTicketTests
{
    [Fact]
    public async Task Should_get_tickets()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var ticketReader = Substitute.For<ITicketReader>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new GetByIdTicketHandler(ticketReader);

        // ticketData
        var ticketData = new TicketData();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Prepare expected ticket data for assertion
        var expectedTicket = new GetByIdTicketResponse(ticketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetByIdAsync(
                ticketId,
                Arg.Any<CancellationToken>())
            .Returns(ticketData);

        var query = new GetByIdTicketQuery(ticketId);

        // Act
        // One specific action
        var result = await handler.HandleAsync(
            query,
            CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedTicket, result);

        // Test the dependencies were called as expected
        await ticketReader
            .Received(1)
            .GetByIdAsync(
            ticketId,
            Arg.Any<CancellationToken>());
    }
}
