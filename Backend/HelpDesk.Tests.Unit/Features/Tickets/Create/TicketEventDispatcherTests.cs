using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Create;

public sealed class TicketEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_created_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var serviceProvider = Substitute.For<IServiceProvider>();
        var dateTimeService = Substitute.For<IDateTimeService>();


        var ticketCreatedEvent = new TicketCreatedEvent(
            User: new ApplicationUser(),
            OccurredAt: dateTimeService.UtcNow,
            TicketId: Guid.NewGuid());

        // Handler
        var handler = Substitute.For<IDomainEventHandler<TicketCreatedEvent>>();

        serviceProvider
            .GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketCreatedEvent>>))
            .Returns(new[] { handler });

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new DomainEventDispatcher(serviceProvider);

        // Act
        await sut.DispatchAsync(
            ticketCreatedEvent,
            CancellationToken.None);

        // Assert
        await handler.Received(1).HandleAsync(
            ticketCreatedEvent,
            Arg.Any<CancellationToken>());
    }
}
