using HelpDesk.src.Features.Tickets.GetMy;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.GetMy;

public sealed class GetMyTicketsTests
{
    [Fact]
    public async Task Should_get_my_tickets()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var ticketReader = new Mock<ITicketReader>();

        // SUT (System Under Test)
        var handler = new GetMyTicketsHandler(
            userContext.Object,
            ticketReader.Object);

        // userId
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // ticketData
        IReadOnlyCollection<TicketData> ticketData = [];

        // Prepare expected tickets for assertion
        var expectedTickets = new GetMyTicketsResponse(ticketData);

        // Mock ticket reader to return the expected ticket data
        ticketReader
            .Setup(
                x => x.GetMyTicketsAsync(
                    It.IsAny<Guid>(),
                    It.IsAny<CancellationToken>()))
            .ReturnsAsync(ticketData);

        // Act
        var result = await handler.HandleAsync(CancellationToken.None);

        // Assert
        // Verify that the result is not null
        Assert.NotNull(result);

        // Verify the output
        Assert.Equal(expectedTickets, result);

        // Test the dependencies were called as expected
        ticketReader.Verify(
            x => x.GetMyTicketsAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
