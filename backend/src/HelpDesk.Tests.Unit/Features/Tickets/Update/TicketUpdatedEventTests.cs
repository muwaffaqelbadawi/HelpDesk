using HelpDesk.Features.Tickets.Update;
using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Update;

public sealed class TicketUpdatedEventTests
{
    [Fact]
    public async Task Should_publish_ticket_updated_event()
    {
        // Arrange
        var repository = new Mock<ITicketRepository>();

        // Mock user ID
        var userId = Guid.NewGuid();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        // User
        var user = new ApplicationUser { Id = userId };

        // Domain event
        var @event = new TicketUpdatedEvent(
            user,
            ticketId,
            now);

        // SUT (System Under Test)
        var sut = new TicketUpdatedEventHandler(repository.Object);

        // Act
        await sut.HandleAsync(
            @event,
            CancellationToken.None);

        // Assert
        repository.Verify(
            x => x.AddToHistory(
                    It.IsAny<Guid>(),
                    It.IsAny<Guid>(),
                    It.IsAny<TicketHistoryType>(),
                    It.IsAny<DateTimeOffset>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
