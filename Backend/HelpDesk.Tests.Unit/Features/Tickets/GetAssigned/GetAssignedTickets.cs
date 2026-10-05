using HelpDesk.src.Features.Tickets.GetAssigned;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAssigned;

public sealed class GetAssignedTickets
{
    [Fact]
    public async Task Should_get_Assigned_tickets()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var userContext = Substitute.For<IUserContext>();
        var ticketReader = Substitute.For<ITicketReader>();

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var handler = new GetAssignedTicketsHandler(userContext, ticketReader);

        // userId
        var userId = Guid.NewGuid();

        userContext
            .GuidUserId
            .Returns(userId);

        // ticketData
        IReadOnlyCollection<TicketData> ticketData = [];

        // Prepare expected assigned tickets for assertion
        var expectedAssignedTickets = new AssignedTicketsResponse(ticketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .GetAssignedAsync(
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
        Assert.Equal(expectedAssignedTickets, result);

        // Test the dependencies were called as expected
        await ticketReader
            .Received(1)
            .GetAssignedAsync(
            userId,
            Arg.Any<CancellationToken>());
    }
}
