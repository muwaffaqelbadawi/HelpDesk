using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Create;

public sealed class UserAccountCreatedEventTests
{
    [Fact]
    public async Task Should_publish_user_account_created_event()
    {
        // Arrange
        var repository = new Mock<IUserRepository>();

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
        var sut = new UserAccountCreatedEventHandler(repository.Object);

        // Act
        await sut.HandleAsync(
            @event,
            CancellationToken.None);

        // Assert
        repository.Verify(
            x => x.AddToHistory(
                It.IsAny<Guid>(),
                It.IsAny<UserHistoryType>(),
                It.IsAny<DateTimeOffset>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
