using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Events.DomainEvents;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Create;

public sealed class UserAccountCreatedEventDispatcherTests
{
    [Fact]
    public async Task Should_dispatch_user_account_created_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var serviceProvider = Substitute.For<IServiceProvider>();
        var dateTimeService = Substitute.For<IDateTimeService>();

        var userAccountCreatedEvent = new UserAccountCreatedEvent(
            User: new ApplicationUser(),
            OccurredAt: dateTimeService.UtcNow,
            TempPassword: string.Empty);

        // Handler
        var handler = Substitute.For<IDomainEventHandler<UserAccountCreatedEvent>>();

        // Mock service provider
        serviceProvider
            .GetService(typeof(IEnumerable<IDomainEventHandler<UserAccountCreatedEvent>>))
            .Returns(new[] { handler });

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new DomainEventDispatcher(serviceProvider);

        // Act
        await sut.DispatchAsync(
            userAccountCreatedEvent,
            CancellationToken.None);

        // Assert
        await handler.Received(1).HandleAsync(
            userAccountCreatedEvent,
            Arg.Any<CancellationToken>());
    }
}
