using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Delete;

public sealed class TicketDeletedEventTests
{
    [Fact]
    public async Task Should_publish_ticket_deleted_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var repository = Substitute.For<ITicketRepository>();

        // userId
        var userId = Guid.NewGuid();

        // ticketId
        var ticketId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset(
            2026, 8, 13, 14, 30, 0,
            TimeSpan.Zero);

        // occurredAt
        var occurredAt = now;

        // User
        var user = new ApplicationUser
        {
            Id = userId
        };

        // Domain event
        var @event = new TicketDeletedEvent(
            User: user,
            TicketId: ticketId,
            OccurredAt: occurredAt);

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new TicketDeletedEventHandler(repository);

        // Act
        await sut.HandleAsync(@event, CancellationToken.None);

        // Assert

        // Verify the AddToHistory was called once.
        await repository.Received(1).AddToHistory(
            userId: userId,
            ticketId: ticketId,
            type: TicketHistoryType.Deleted,
            occurredAt: now,
            cancellationToken: Arg.Any<CancellationToken>());
    }
}
