using HelpDesk.src.Features.Auth.RefreshToken;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.RefreshToken;

public sealed class RefreshTokenTests
{
    [Fact]
    public async Task Should_rotate_refresh_token_for_active_session()
    {
        // Arrange
        var refreshTokenReader = new Mock<IRefreshTokenReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var refreshTokenRepository = new Mock<IRefreshTokenRepository>();
        var tokenIssuer = new Mock<ITokenIssuer>();
        var userReader = new Mock<IUserReader>();
        var userSessionReader = new Mock<IUserSessionReader>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<RefreshTokenHandler>>();

        // SUT (System Under Test)
        var handler = new RefreshTokenHandler(
            refreshTokenReader.Object,
            dateTimeService.Object,
            refreshTokenRepository.Object,
            tokenIssuer.Object,
            userReader.Object,
            userSessionReader.Object,
            Options.Create(new UserSessionOptions
            {
                PersistentSessionExpiryDays = 7,
                DefaultSessionExpiryMinutes = 30
            }),
            dispatcher.Object,
            logger.Object);

        // access token
        var accessToken = "access_token";

        // refresh token
        var refreshToken = "refresh_token";

        var userId = Guid.NewGuid();
        var userSessionId = Guid.NewGuid();
        var user = new ApplicationUser();
        var userAccountData = new UserAccountData();
        var now = DateTimeOffset.UtcNow;
        var existingToken = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            UserSessionId = userSessionId,
            ExpiresAt = now.AddDays(7)
        };
        var activeSession = new ApplicationUserSession
        {
            Id = userSessionId,
            UserId = userId,
            IsPersistent = true,
            ExpiresAt = now.AddDays(1)
        };

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        var accessTokenExpiresAt = now.AddHours(1);
        var refreshTokenExpiresAt = now.AddDays(7);
        userSessionReader
            .Setup(x => x.GetCurrentAsync(
                userSessionId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(activeSession);

        // expected token result
        var tokenResult = new TokenResult(
            accessToken,
            refreshToken,
            accessTokenExpiresAt,
            refreshTokenExpiresAt);
        var replacementRefreshToken = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            Token = refreshToken,
            UserId = userId,
            UserSessionId = userSessionId,
            ExpiresAt = refreshTokenExpiresAt
        };

        // command
        var command = new RefreshTokenCommand(refreshToken);

        refreshTokenReader
            .Setup(x => x.GetRefreshTokenAsync(
                refreshToken,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(existingToken);

        // Mock user reader to return the expected user
        userReader
            .Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(user);

        // Mock token issuer to return the expected token result
        tokenIssuer
            .Setup(x => x.IssueTokenObject(
                user,
                userSessionId,
                refreshTokenExpiresAt))
            .Returns(tokenResult);

        tokenIssuer
            .Setup(x => x.CreateRefreshTokenObject(
                user,
                userSessionId,
                tokenResult))
            .Returns(replacementRefreshToken);

        refreshTokenRepository
            .Setup(x => x.RotateAsync(
                existingToken.Id,
                replacementRefreshToken,
                now,
                TimeSpan.FromDays(7),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(refreshTokenExpiresAt);

        userReader
            .Setup(x => x.GetByIdAsync(
                userId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.Equal(tokenResult, result.Token);
        refreshTokenRepository.Verify(
            x => x.RotateAsync(
                existingToken.Id,
                replacementRefreshToken,
                now,
                TimeSpan.FromDays(7),
                It.IsAny<CancellationToken>()),
            Times.Once);
        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task Should_reject_refresh_for_revoked_session()
    {
        var refreshToken = "refresh_token";
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var token = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            UserSessionId = sessionId,
            ExpiresAt = now.AddDays(1)
        };
        var revokedSession = new ApplicationUserSession
        {
            Id = sessionId,
            UserId = userId,
            ExpiresAt = now.AddDays(1),
            RevokedAt = now
        };

        var refreshTokenReader = new Mock<IRefreshTokenReader>();
        refreshTokenReader
            .Setup(x => x.GetRefreshTokenAsync(refreshToken, It.IsAny<CancellationToken>()))
            .ReturnsAsync(token);

        var dateTimeService = new Mock<IDateTimeService>();
        dateTimeService.Setup(x => x.UtcNow).Returns(now);

        var userSessionReader = new Mock<IUserSessionReader>();
        userSessionReader
            .Setup(x => x.GetCurrentAsync(sessionId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(revokedSession);

        var tokenIssuer = new Mock<ITokenIssuer>();
        var handler = new RefreshTokenHandler(
            refreshTokenReader.Object,
            dateTimeService.Object,
            new Mock<IRefreshTokenRepository>().Object,
            tokenIssuer.Object,
            new Mock<IUserReader>().Object,
            userSessionReader.Object,
            Options.Create(new UserSessionOptions
            {
                PersistentSessionExpiryDays = 7,
                DefaultSessionExpiryMinutes = 30
            }),
            new Mock<IDomainEventDispatcher>().Object,
            new Mock<ILogger<RefreshTokenHandler>>().Object);

        await Assert.ThrowsAsync<AuthenticationFailedException>(() =>
            handler.HandleAsync(
                new RefreshTokenCommand(refreshToken),
                CancellationToken.None));

        tokenIssuer.Verify(
            x => x.IssueTokenObject(
                It.IsAny<ApplicationUser>(),
                It.IsAny<Guid>(),
                It.IsAny<DateTimeOffset>()),
            Times.Never);
    }

    [Fact]
    public async Task Should_reject_expired_token_when_its_session_is_still_active()
    {
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var sessionExpiresAt = now.AddDays(2);
        var token = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            Token = "expired-refresh-token",
            UserId = userId,
            UserSessionId = sessionId,
            ExpiresAt = now.AddMinutes(-1)
        };
        var session = new ApplicationUserSession
        {
            Id = sessionId,
            UserId = userId,
            IsPersistent = true,
            ExpiresAt = sessionExpiresAt
        };
        var refreshTokenReader = new Mock<IRefreshTokenReader>();
        refreshTokenReader
            .Setup(x => x.GetRefreshTokenAsync(
                token.Token,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(token);
        var sessionReader = new Mock<IUserSessionReader>();
        sessionReader
            .Setup(x => x.GetCurrentAsync(sessionId, It.IsAny<CancellationToken>()))
            .ReturnsAsync(session);
        var tokenIssuer = new Mock<ITokenIssuer>();
        var repository = new Mock<IRefreshTokenRepository>();
        var handler = new RefreshTokenHandler(
            refreshTokenReader.Object,
            Mock.Of<IDateTimeService>(x => x.UtcNow == now),
            repository.Object,
            tokenIssuer.Object,
            Mock.Of<IUserReader>(),
            sessionReader.Object,
            Options.Create(new UserSessionOptions
            {
                PersistentSessionExpiryDays = 7,
                DefaultSessionExpiryMinutes = 30
            }),
            Mock.Of<IDomainEventDispatcher>(),
            Mock.Of<Microsoft.Extensions.Logging.ILogger<RefreshTokenHandler>>());

        await Assert.ThrowsAsync<AuthenticationFailedException>(() =>
            handler.HandleAsync(
                new RefreshTokenCommand(token.Token),
                CancellationToken.None));

        repository.Verify(x => x.RotateAsync(
            It.IsAny<Guid>(),
            It.IsAny<ApplicationRefreshToken>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<TimeSpan>(),
            It.IsAny<CancellationToken>()), Times.Never);
        tokenIssuer.Verify(x => x.IssueTokenObject(
            It.IsAny<ApplicationUser>(),
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>()), Times.Never);
        tokenIssuer.Verify(x => x.CreateRefreshTokenObject(
            It.IsAny<ApplicationUser>(),
            It.IsAny<Guid>(),
            It.IsAny<TokenResult>()), Times.Never);
    }

    [Fact]
    public async Task Should_not_revoke_other_tokens_when_concurrent_rotation_loses()
    {
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var token = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            Token = "refresh",
            UserId = userId,
            UserSessionId = sessionId,
            ExpiresAt = now.AddDays(7)
        };
        var session = new ApplicationUserSession
        {
            Id = sessionId,
            UserId = userId,
            IsPersistent = true,
            ExpiresAt = now.AddDays(7)
        };
        var reader = new Mock<IRefreshTokenReader>();
        reader.Setup(x => x.GetRefreshTokenAsync(
            token.Token,
            It.IsAny<CancellationToken>())).ReturnsAsync(token);
        var sessionReader = new Mock<IUserSessionReader>();
        sessionReader.Setup(x => x.GetCurrentAsync(
            sessionId,
            It.IsAny<CancellationToken>())).ReturnsAsync(session);
        var tokenRepository = new Mock<IRefreshTokenRepository>();
        tokenRepository.Setup(x => x.RotateAsync(
            token.Id,
            It.IsAny<ApplicationRefreshToken>(),
            now,
            TimeSpan.FromDays(7),
            It.IsAny<CancellationToken>())).ReturnsAsync((DateTimeOffset?)null);
        var issuer = new Mock<ITokenIssuer>();
        var userReader = new Mock<IUserReader>();
        userReader.Setup(x => x.GetUserAsync(userId.ToString()))
            .ReturnsAsync(new ApplicationUser { Id = userId });
        var handler = new RefreshTokenHandler(
            reader.Object,
            Mock.Of<IDateTimeService>(x => x.UtcNow == now),
            tokenRepository.Object,
            issuer.Object,
            userReader.Object,
            sessionReader.Object,
            Options.Create(new UserSessionOptions
            {
                PersistentSessionExpiryDays = 7,
                DefaultSessionExpiryMinutes = 30
            }),
            Mock.Of<IDomainEventDispatcher>(),
            Mock.Of<Microsoft.Extensions.Logging.ILogger<RefreshTokenHandler>>());

        await Assert.ThrowsAsync<AuthenticationFailedException>(() =>
            handler.HandleAsync(
                new RefreshTokenCommand(token.Token),
                CancellationToken.None));

        tokenRepository.Verify(x => x.RevokeAllAsync(
            It.IsAny<Guid>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<CancellationToken>()), Times.Never);
    }

    [Fact]
    public async Task Should_reject_refresh_for_expired_session()
    {
        var now = DateTimeOffset.UtcNow;
        var userId = Guid.NewGuid();
        var sessionId = Guid.NewGuid();
        var token = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            Token = "valid-refresh-token",
            UserId = userId,
            UserSessionId = sessionId,
            ExpiresAt = now.AddDays(1)
        };
        var session = new ApplicationUserSession
        {
            Id = sessionId,
            UserId = userId,
            IsPersistent = true,
            ExpiresAt = now.AddSeconds(-1)
        };
        var reader = new Mock<IRefreshTokenReader>();
        reader.Setup(x => x.GetRefreshTokenAsync(
            token.Token,
            It.IsAny<CancellationToken>())).ReturnsAsync(token);
        var sessionReader = new Mock<IUserSessionReader>();
        sessionReader.Setup(x => x.GetCurrentAsync(
            sessionId,
            It.IsAny<CancellationToken>())).ReturnsAsync(session);
        var repository = new Mock<IRefreshTokenRepository>();
        var handler = new RefreshTokenHandler(
            reader.Object,
            Mock.Of<IDateTimeService>(x => x.UtcNow == now),
            repository.Object,
            Mock.Of<ITokenIssuer>(),
            Mock.Of<IUserReader>(),
            sessionReader.Object,
            Options.Create(new UserSessionOptions
            {
                PersistentSessionExpiryDays = 7,
                DefaultSessionExpiryMinutes = 30
            }),
            Mock.Of<IDomainEventDispatcher>(),
            Mock.Of<Microsoft.Extensions.Logging.ILogger<RefreshTokenHandler>>());

        await Assert.ThrowsAsync<AuthenticationFailedException>(() =>
            handler.HandleAsync(
                new RefreshTokenCommand(token.Token),
                CancellationToken.None));

        repository.Verify(x => x.RotateAsync(
            It.IsAny<Guid>(),
            It.IsAny<ApplicationRefreshToken>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<TimeSpan>(),
            It.IsAny<CancellationToken>()), Times.Never);
    }

    [Fact]
    public async Task Should_reject_a_refresh_token_that_was_revoked_or_reused()
    {
        var refreshToken = "revoked-refresh-token";
        var reader = new Mock<IRefreshTokenReader>();
        reader.Setup(x => x.GetRefreshTokenAsync(
            refreshToken,
            It.IsAny<CancellationToken>())).ReturnsAsync((ApplicationRefreshToken?)null);
        var repository = new Mock<IRefreshTokenRepository>();
        var handler = new RefreshTokenHandler(
            reader.Object,
            Mock.Of<IDateTimeService>(),
            repository.Object,
            Mock.Of<ITokenIssuer>(),
            Mock.Of<IUserReader>(),
            Mock.Of<IUserSessionReader>(),
            Options.Create(new UserSessionOptions()),
            Mock.Of<IDomainEventDispatcher>(),
            Mock.Of<Microsoft.Extensions.Logging.ILogger<RefreshTokenHandler>>());

        await Assert.ThrowsAsync<AuthenticationFailedException>(() =>
            handler.HandleAsync(
                new RefreshTokenCommand(refreshToken),
                CancellationToken.None));

        repository.Verify(x => x.RotateAsync(
            It.IsAny<Guid>(),
            It.IsAny<ApplicationRefreshToken>(),
            It.IsAny<DateTimeOffset>(),
            It.IsAny<TimeSpan>(),
            It.IsAny<CancellationToken>()), Times.Never);
    }
}
