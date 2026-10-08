using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Delete;

public sealed class TicketDeletedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_deleted_event()
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

        var ticketDeletedEvent = new TicketDeletedEvent(
            user,
            ticketId,
            now);

        // Handler
        var handler = new Mock<IDomainEventHandler<TicketDeletedEvent>>();

        // Mock service provider
        serviceProvider
            .Setup(x => x.GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketDeletedEvent>>)))
            .Returns(new[]
            {
                handler.Object
            });

        // SUT (System Under Test)
        var sut = new DomainEventDispatcher(serviceProvider.Object);

        // Act
        await sut.DispatchAsync(
            ticketDeletedEvent,
            CancellationToken.None);

        // Assert
        handler.Verify(
            x => x.HandleAsync(
                ticketDeletedEvent,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
