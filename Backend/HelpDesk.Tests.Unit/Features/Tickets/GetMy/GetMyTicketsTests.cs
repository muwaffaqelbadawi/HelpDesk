using HelpDesk.src.Features.Tickets.GetMy;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetMy;

public sealed class GetMyTicketsTests
{
    [Fact]
    public async Task Should_get_my_tickets()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var ticketReader = Substitute.For<ITicketReader>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new GetMyTicketsHandler(userContext, ticketReader);

        // userId
        var userId = Guid.NewGuid();

        userContext
            .GuidUserId
            .Returns(userId);

        // ticketData
        IReadOnlyCollection<TicketData> ticketData = [];

        // Prepare expected tickets for assertion
        var expectedTickets = new GetMyTicketsResponse(ticketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetMyTicketsAsync(
                userId,
                Arg.Any<CancellationToken>())
            .Returns(ticketData);

        // Act
        // One specific action
        var result = await handler.HandleAsync(CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedTickets, result);

        // Test the dependencies were called as expected
        await ticketReader.Received(1).GetMyTicketsAsync(
            userId,
            Arg.Any<CancellationToken>());
    }
}
