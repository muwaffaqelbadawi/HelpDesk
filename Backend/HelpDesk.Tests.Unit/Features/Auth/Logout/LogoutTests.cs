using HelpDesk.src.Features.Auth.Logout.Current;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Logout;

public sealed class LogoutTests
{
    [Fact]
    public async Task Should_logout_successfully()
    {
        // Arrange
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var refreshTokenRepository = new Mock<IRefreshTokenRepository>();
        var sessionRepository = new Mock<IUserSessionRepository>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<LogoutHandler>>();

        // SUT (System Under Test)
        var handler = new LogoutHandler(
            userContext.Object,
            userReader.Object,
            dateTimeService.Object,
            refreshTokenRepository.Object,
            sessionRepository.Object,
            dispatcher.Object,
            logger.Object);


        // user ID
        var userId = Guid.NewGuid();

        userContext
            .Setup(x => x.GuidUserId)
            .Returns(userId);

        // session ID
        var sessionId = Guid.NewGuid();

        userContext
            .Setup(x => x.SessionId)
            .Returns(sessionId);

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        var sequence = new MockSequence();

        // session repository
        sessionRepository
            .InSequence(sequence)
            .Setup(x => x.RevokeAsync(
                sessionId,
                now,
                CancellationToken.None))
            .ReturnsAsync(1);

        // refresh token repository
        refreshTokenRepository
            .InSequence(sequence)
            .Setup(x => x.RevokeAsync(
                userId,
                sessionId,
                now,
                CancellationToken.None))
                .ReturnsAsync(1);

        // create new user account data
        var user = new ApplicationUser();

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        var command = new LogoutCommand();

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(1, result.RevokedRefreshTokensCount);

        sessionRepository.Verify(x => x.RevokeAsync(
            sessionId,
            now,
            CancellationToken.None),
            Times.Once);
        refreshTokenRepository.Verify(x => x.RevokeAsync(
            userId,
            sessionId,
            now,
            CancellationToken.None),
            Times.Once);
        refreshTokenRepository.Verify(x => x.RevokeAllAsync(
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<CancellationToken>()),
            Times.Never);

        dispatcher.Verify(
           x => x.DispatchAsync(
               It.IsAny<IDomainEvent>(),
               It.IsAny<CancellationToken>()),
           Times.Once);
    }
}
