using HelpDesk.Features.Users.UpdateMy;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Events.DomainEvents;
using HelpDesk.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.UpdateMy;

public sealed class MyUserAccountUpdatedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_my_user_account_updated_event()
    {
        // Arrange
        var serviceProvider = new Mock<IServiceProvider>();
        var dateTimeService = new Mock<IDateTimeService>();

        // Mock user ID
        var userId = Guid.NewGuid();

        // Mock a real user with the same userId
        var user = new ApplicationUser { Id = userId };

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        var userUpdatedEvent = new MyUserAccountUpdatedEvent(
            user,
            now);

        // Handler
        var handler = new Mock<IDomainEventHandler<MyUserAccountUpdatedEvent>>();

        // Mock service provider
        serviceProvider
            .Setup(x => x.GetService(
                typeof(IEnumerable<IDomainEventHandler<MyUserAccountUpdatedEvent>>)))
            .Returns(new[]
            {
                handler.Object
            });

        // SUT (System Under Test)
        var sut = new DomainEventDispatcher(serviceProvider.Object);

        // Act
        await sut.DispatchAsync(
            userUpdatedEvent,
            CancellationToken.None);

        // Assert
        handler.Verify(
            x => x.HandleAsync(
                    It.IsAny<MyUserAccountUpdatedEvent>(),
                    It.IsAny<CancellationToken>()),
                Times.Once);
    }
}
