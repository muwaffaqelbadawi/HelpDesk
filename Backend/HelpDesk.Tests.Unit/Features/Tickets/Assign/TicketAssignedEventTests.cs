using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Assign;

public sealed class TicketAssignedEventTests
{
    [Fact]
    public async Task Should_publish_ticket_assigned_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var repository = Substitute.For<ITicketRepository>();

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
        // Real handler instance with mocked dependencies
        var sut = new TicketAssignedEventHandler(repository);

        // Act
        await sut.HandleAsync(
            @event,
            CancellationToken.None);

        // Assert
        await repository.Received(1).AddToHistory(
            Arg.Is(userId),
            Arg.Is(ticketId),
            Arg.Any<TicketHistoryType>(),
            Arg.Is(now),
            Arg.Any<CancellationToken>());
    }
}
