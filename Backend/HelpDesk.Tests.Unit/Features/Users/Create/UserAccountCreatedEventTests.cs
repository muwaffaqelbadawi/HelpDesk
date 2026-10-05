using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using NSubstitute;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Create;

public sealed class UserAccountCreatedEventTests
{
    [Fact]
    public async Task Should_publish_user_account_created_event()
    {
        // Arrange

        // Mock dependencies (substitutes)
        var repository = Substitute.For<IUserRepository>();

        // userId
        var userId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        // Mock temp password
        var tempPassword = string.Empty;

        // User
        var user = new ApplicationUser
        {
            Id = userId
        };

        // Domain event
        var @event = new UserAccountCreatedEvent(
            User: user,
            OccurredAt: now,
            TempPassword: tempPassword);

        // SUT (System Under Test)
        // Real handler instance with mocked dependencies
        var sut = new UserAccountCreatedEventHandler(repository);

        // Act
        await sut.HandleAsync(
            @event,
            CancellationToken.None);

        // Assert
        await repository.Received(1).AddToHistory(
            Arg.Is(userId),
            Arg.Any<UserHistoryType>(),
            Arg.Is(now),
            Arg.Any<CancellationToken>());
    }
}
