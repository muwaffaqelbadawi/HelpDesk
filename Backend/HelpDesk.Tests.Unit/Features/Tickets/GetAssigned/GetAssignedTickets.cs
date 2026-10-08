using HelpDesk.src.Features.Tickets.GetAssigned;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetAssigned;

public sealed class GetAssignedTickets
{
    [Fact]
    public async Task Should_get_Assigned_tickets()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var ticketReader = new Mock<ITicketReader>();

        // SUT (System Under Test)
        var handler = new GetAssignedTicketsHandler(
            userContext.Object,
            ticketReader.Object);

        // userId
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // ticketData
        IReadOnlyCollection<TicketData> ticketData = [];

        // Prepare expected assigned tickets for assertion
        var expectedAssignedTickets = new AssignedTicketsResponse(ticketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(x => x.GetAssignedAsync(
                userId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(ticketData);

        // Act
        var result = await handler.HandleAsync(CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expectedAssignedTickets, result);

        ticketReader.Verify(
            x => x
                .GetAssignedAsync(
                userId,
                It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
