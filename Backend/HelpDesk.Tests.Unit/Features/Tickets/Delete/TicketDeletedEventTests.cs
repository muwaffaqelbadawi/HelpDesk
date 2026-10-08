using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Delete;

public sealed class TicketDeletedEventTests
{
    [Fact]
    public async Task Should_publish_ticket_deleted_event()
    {
        // Arrange
        var repository = new Mock<ITicketRepository>();

        // userId
        var userId = Guid.NewGuid();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        // occurredAt
        var occurredAt = now;

        // User
        var user = new ApplicationUser { Id = userId };

        // Domain event
        var @event = new TicketDeletedEvent(
            user,
            ticketId,
            occurredAt);

        // SUT (System Under Test)
        var sut = new TicketDeletedEventHandler(repository.Object);

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
