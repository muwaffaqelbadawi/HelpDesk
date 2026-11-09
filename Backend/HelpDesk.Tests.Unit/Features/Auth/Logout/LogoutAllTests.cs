using HelpDesk.src.Features.Auth.Logout.All;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Logout;

public sealed class LogoutAllTests
{
    [Fact]
    public async Task Should_revoke_all_sessions_before_all_refresh_tokens()
    {
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var refreshTokenRepository = new Mock<IRefreshTokenRepository>();
        var sessionRepository = new Mock<IUserSessionRepository>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<LogoutAllHandler>>();

        var handler = new LogoutAllHandler(
            userContext.Object,
            userReader.Object,
            dateTimeService.Object,
            refreshTokenRepository.Object,
            sessionRepository.Object,
            dispatcher.Object,
            logger.Object);

        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var now = DateTimeOffset.UtcNow;

        userContext.Setup(x => x.GuidUserId).Returns(userId);
        userContext.Setup(x => x.SessionId).Returns(sessionId);
        dateTimeService.Setup(x => x.UtcNow).Returns(now);

        var sequence = new MockSequence();

        sessionRepository
            .InSequence(sequence)
            .Setup(x => x.RevokeAllAsync(
                userId,
                now,
                CancellationToken.None))
            .ReturnsAsync(2);
        refreshTokenRepository
            .InSequence(sequence)
            .Setup(x => x.RevokeAllAsync(
                userId,
                now,
                CancellationToken.None))
            .ReturnsAsync(3);

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(new ApplicationUser());

        var result = await handler.HandleAsync(
            new LogoutAllCommand(),
            CancellationToken.None);

        Assert.Equal(3, result.RevokedRefreshTokensCount);
        sessionRepository.Verify(x => x.RevokeAllAsync(
            userId,
            now,
            CancellationToken.None),
            Times.Once);
        refreshTokenRepository.Verify(x => x.RevokeAllAsync(
            userId,
            now,
            CancellationToken.None),
            Times.Once);
        refreshTokenRepository.Verify(x => x.RevokeAsync(
            It.IsAny<Guid>(),
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<CancellationToken>()),
            Times.Never);
    }
}
