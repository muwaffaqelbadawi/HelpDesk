using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Update;

public sealed class TicketUpdatedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_updated_event()
    {
        // Arrange
        var serviceProvider = new Mock<IServiceProvider>();
        var dateTimeService = new Mock<IDateTimeService>();

        // Mock user context to return a specific user ID
        var userId = Guid.NewGuid();

        // Create a real user with the same userId
        var user = new ApplicationUser { Id = userId };

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        // ticket ID
        var ticketId = Guid.NewGuid();

        var ticketUpdatedEvent = new TicketUpdatedEvent(
            user,
            ticketId,
            now);

        // Handler
        var handler = new Mock<IDomainEventHandler<TicketUpdatedEvent>>();

        // Mock service provider
        serviceProvider
            .Setup(s => s.GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketUpdatedEvent>>)))
            .Returns(new[]
            {
                handler.Object
            });

        // SUT (System Under Test)
        var sut = new DomainEventDispatcher(serviceProvider.Object);

        // Act
        await sut.DispatchAsync(
            ticketUpdatedEvent,
            CancellationToken.None);

        // Assert
        handler.Verify(
            x => x.HandleAsync(
                ticketUpdatedEvent,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
