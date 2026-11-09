using HelpDesk.src.Features.Auth.UserSession.TerminateAll;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.UserSession.TerminateAll;

public sealed class TerminateAllUserSessionsTests
{
    [Theory]
    [InlineData(2, 4)]
    [InlineData(0, 0)]
    public async Task Should_terminate_other_sessions_before_their_refresh_tokens(
        int revokedSessions,
        int revokedRefreshTokens)
    {
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var refreshTokenRepository = new Mock<IRefreshTokenRepository>();
        var sessionRepository = new Mock<IUserSessionRepository>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<TerminateAllUserSessionsHandler>>();

        var handler = new TerminateAllUserSessionsHandler(
            userContext.Object,
            userReader.Object,
            dateTimeService.Object,
            refreshTokenRepository.Object,
            sessionRepository.Object,
            dispatcher.Object,
            logger.Object);

        var userId = Guid.NewGuid();
        var currentSessionId = Guid.NewGuid();
        var now = DateTimeOffset.UtcNow;

        userContext.Setup(x => x.GuidUserId).Returns(userId);
        userContext.Setup(x => x.SessionId).Returns(currentSessionId);
        dateTimeService.Setup(x => x.UtcNow).Returns(now);

        var sequence = new MockSequence();

        sessionRepository
            .InSequence(sequence)
            .Setup(x => x.RevokeAllOtherAsync(
                userId,
                currentSessionId,
                now,
                CancellationToken.None))
            .ReturnsAsync(revokedSessions);
        refreshTokenRepository
            .InSequence(sequence)
            .Setup(x => x.RevokeAllOtherAsync(
                userId,
                currentSessionId,
                now,
                CancellationToken.None))
            .ReturnsAsync(revokedRefreshTokens);

        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(new ApplicationUser());

        var result = await handler.HandleAsync(
            new TerminateAllUserSessionsCommand(),
            CancellationToken.None);

        Assert.Equal(revokedRefreshTokens, result.RevokedRefreshTokensCount);
        sessionRepository.Verify(x => x.RevokeAllOtherAsync(
            userId,
            currentSessionId,
            now,
            CancellationToken.None),
            Times.Once);
        refreshTokenRepository.Verify(x => x.RevokeAllOtherAsync(
            userId,
            currentSessionId,
            now,
            CancellationToken.None),
            Times.Once);
        sessionRepository.Verify(x => x.RevokeAsync(
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<CancellationToken>()),
            Times.Never);
        refreshTokenRepository.Verify(x => x.RevokeAsync(
            It.IsAny<Guid>(),
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<CancellationToken>()),
            Times.Never);
        dispatcher.Verify(x => x.DispatchAsync(
            It.IsAny<IDomainEvent>(),
            CancellationToken.None),
            Times.Once);
    }
}
