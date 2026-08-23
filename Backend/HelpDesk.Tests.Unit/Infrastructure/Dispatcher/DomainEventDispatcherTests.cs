using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Infrastructure.Events;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Infrastructure.Dispatcher;

public sealed class DomainEventDispatcherTests
{
    [Fact]

    public async Task Should_dispatch_domain_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var serviceProvider = Substitute.For<IServiceProvider>();
        var handler = Substitute.For<IDomainEventHandler<TicketCreated>>();

        // userId
        var userId = Guid.NewGuid();

        // Mock ticketId and occurredAt context to return a specific user ID
        var ticketId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset(
            2026, 8, 13, 14, 30, 0,
            TimeSpan.Zero);

        // occurredAt
        var occurredAt = now;

        var @event = new TicketCreated(
            userId,
            ticketId,
            occurredAt);

        serviceProvider
            .GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketCreated>>))
            .Returns(new[] { handler });

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new DomainEventDispatcher(serviceProvider);

        // Act
        await sut.DispatchAsync(
            @event,
            CancellationToken.None);

        // Assert

        // Verify the Handle was called once.
        await handler.Received(1).Handle(
            @event,
            Arg.Any<CancellationToken>());
    }
}
