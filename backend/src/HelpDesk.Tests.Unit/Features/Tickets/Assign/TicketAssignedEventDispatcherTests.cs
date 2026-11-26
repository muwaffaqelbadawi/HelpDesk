using HelpDesk.Features.Tickets.Assign;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Events.DomainEvents;
using HelpDesk.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Tickets.Assign;

public sealed class TicketAssignedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_ticket_assigned_event()
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

        var ticketAssignedEvent = new TicketAssignedEvent(
            user,
            now,
            ticketId);

        // Handler
        var handler = new Mock<IDomainEventHandler<TicketAssignedEvent>>();

        // Mock service provider
        serviceProvider
            .Setup(x => x.GetService(
                typeof(IEnumerable<IDomainEventHandler<TicketAssignedEvent>>)))
            .Returns(new[]
            {
                handler.Object
            });

        // SUT (System Under Test)
        var sut = new DomainEventDispatcher(serviceProvider.Object);

        // Act
        await sut.DispatchAsync(
            ticketAssignedEvent,
            CancellationToken.None);

        // Assert
        handler.Verify(
            x => x.HandleAsync(
                ticketAssignedEvent,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
