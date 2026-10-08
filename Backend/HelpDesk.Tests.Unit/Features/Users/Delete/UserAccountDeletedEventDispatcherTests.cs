using HelpDesk.src.Features.Users.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Delete;

public sealed class UserAccountDeletedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_user_deleted_event()
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

        dateTimeService
            .SetupGet(x => x.UtcNow)
            .Returns(now);

        var userDeletedEvent = new UserAccountDeletedEvent(
            user,
            now);

        // Handler
        var handler = new Mock<IDomainEventHandler<UserAccountDeletedEvent>>();

        // Mock service provider
        serviceProvider
            .Setup(x => x.GetService(
                typeof(IEnumerable<IDomainEventHandler<UserAccountDeletedEvent>>)))
            .Returns(new[]
            {
                handler.Object
            });

        // SUT (System Under Test)
        var sut = new DomainEventDispatcher(serviceProvider.Object);

        // Act
        await sut.DispatchAsync(
            userDeletedEvent,
            CancellationToken.None);

        // Assert
        handler.Verify(
            x => x.HandleAsync(
                userDeletedEvent,
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
