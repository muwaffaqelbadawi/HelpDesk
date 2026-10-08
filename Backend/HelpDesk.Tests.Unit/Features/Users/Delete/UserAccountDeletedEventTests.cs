using HelpDesk.src.Features.Users.Delete;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Delete;

public sealed class UserAccountDeletedEventTests
{
    [Fact]
    public async Task Should_publish_user_account_deleted_event()
    {
        // Arrange
        var repository = new Mock<IUserRepository>();

        // userId
        var userId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        // occurredAt
        var occurredAt = now;

        // User
        var user = new ApplicationUser { Id = userId };

        // Domain event
        var @event = new UserAccountDeletedEvent(
            user,
            occurredAt);

        // SUT (System Under Test)
        var sut = new UserAccountDeletedEventHandler(repository.Object);

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
