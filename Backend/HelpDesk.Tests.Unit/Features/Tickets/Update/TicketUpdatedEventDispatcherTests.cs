using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Update;

public sealed class TicketUpdatedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_updated_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var serviceProvider = Substitute.For<IServiceProvider>();
        var dateTimeService = Substitute.For<IDateTimeService>();

        var ticketUpdatedEvent = new TicketUpdatedEvent(
            User: new ApplicationUser(),
            OccurredAt: dateTimeService.UtcNow,
            TicketId: Guid.NewGuid());

        // Handler
        var handler = Substitute.For<IDomainEventHandler<TicketUpdatedEvent>>();

        // Mock service provider
        serviceProvider
            .GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketUpdatedEvent>>))
            .Returns(new[] { handler });

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new DomainEventDispatcher(serviceProvider);

        // Act
        await sut.DispatchAsync(
            ticketUpdatedEvent,
            CancellationToken.None);

        // Assert
        await handler.Received(1).HandleAsync(
            ticketUpdatedEvent,
            Arg.Any<CancellationToken>());
    }
}
