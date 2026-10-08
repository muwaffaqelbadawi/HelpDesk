using HelpDesk.src.Features.Users.Update;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Users.Update;

public sealed class UserAccountUpdatedEventTests
{
    [Fact]
    public async Task Should_publish_user_account_updated_event()
    {
        // Arrange
        var repository = new Mock<IUserRepository>();

        // Mock user ID
        var userId = Guid.NewGuid();

        // Mock date time service to return a specific current time
        var now = new DateTimeOffset();

        // User
        var user = new ApplicationUser { Id = userId };

        // Domain event
        var @event = new UserAccountUpdatedEvent(
            user,
            now);

        // SUT (System Under Test)
        var sut = new UserAccountUpdatedEventHandler(repository.Object);

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
