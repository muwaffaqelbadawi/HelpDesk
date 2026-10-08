using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Create;

public sealed class TicketCreatedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_created_event()
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

        var ticketCreatedEvent = new TicketCreatedEvent(
            user,
            ticketId,
            now);

        // Handler
        var handler = new Mock<IDomainEventHandler<TicketCreatedEvent>>();

        // Mock service provider
        serviceProvider
            .Setup(x => x.GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketCreatedEvent>>)))
            .Returns(new[]
            {
                handler.Object
            });

        // SUT (System Under Test)
        var sut = new DomainEventDispatcher(serviceProvider.Object);

        // Act
        await sut.DispatchAsync(
            ticketCreatedEvent,
            CancellationToken.None);

        // Assert
        handler.Verify(
            x => x.HandleAsync(
                ticketCreatedEvent,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
