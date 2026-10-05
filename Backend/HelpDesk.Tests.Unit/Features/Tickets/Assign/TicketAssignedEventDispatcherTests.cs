using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Assign;

public sealed class TicketAssignedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_assigned_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var serviceProvider = Substitute.For<IServiceProvider>();
        var dateTimeService = Substitute.For<IDateTimeService>();

        var ticketAssignedEvent = new TicketAssignedEvent(
            User: new ApplicationUser(),
            OccurredAt: dateTimeService.UtcNow,
            TicketId: Guid.NewGuid());

        // Handler
        var handler = Substitute.For<IDomainEventHandler<TicketAssignedEvent>>();

        // Mock service provider
        serviceProvider
            .GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketAssignedEvent>>))
            .Returns(new[] { handler });

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new DomainEventDispatcher(serviceProvider);

        // Act
        await sut.DispatchAsync(
            ticketAssignedEvent,
            CancellationToken.None);

        // Assert
        await handler.Received(1).HandleAsync(
            ticketAssignedEvent,
            Arg.Any<CancellationToken>());
    }
}