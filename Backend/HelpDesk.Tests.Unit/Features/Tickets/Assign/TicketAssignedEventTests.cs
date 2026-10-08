using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Assign;

public sealed class TicketAssignedEventTests
{
    [Fact]
    public async Task Should_publish_ticket_assigned_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var repository = new Mock<ITicketRepository>();

        // userId
        var userId = Guid.NewGuid();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        // User
        var user = new ApplicationUser
        {
            Id = userId
        };

        // Domain event
        var @event = new TicketAssignedEvent(
            User: user,
            TicketId: ticketId,
            OccurredAt: now);

        // SUT (System Under Test)
        var sut = new TicketAssignedEventHandler(repository.Object);

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
