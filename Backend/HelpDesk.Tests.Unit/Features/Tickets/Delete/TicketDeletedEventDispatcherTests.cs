using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Delete;

public sealed class TicketDeletedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_deleted_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var serviceProvider = Substitute.For<IServiceProvider>();
        var dateTimeService = Substitute.For<IDateTimeService>();

        var ticketDeletedEvent = new TicketDeletedEvent(
            User: new ApplicationUser(),
            OccurredAt: dateTimeService.UtcNow,
            TicketId: Guid.NewGuid());

        // Handler
        var handler = Substitute.For<IDomainEventHandler<TicketDeletedEvent>>();

        // Mock service provider
        serviceProvider
            .GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketDeletedEvent>>))
            .Returns(new[] { handler });

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new DomainEventDispatcher(serviceProvider);

        // Act
        await sut.DispatchAsync(
            ticketDeletedEvent,
            CancellationToken.None);

        // Assert
        await handler.Received(1).HandleAsync(
            ticketDeletedEvent,
            Arg.Any<CancellationToken>());
    }
}
