using HelpDesk.src.Features.Auth.RefreshToken;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.RefreshToken;

public sealed class RefreshTokenTests
{
    [Fact]
    public async Task Should_login_successfully()
    {
        // Arrange
        var refreshTokenReader = new Mock<IRefreshTokenReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var refreshTokenRepository = new Mock<IRefreshTokenRepository>();
        var tokenService = new Mock<ITokenService>();
        var userContext = new Mock<IUserContext>();
        var userReader = new Mock<IUserReader>();
        var userSessionReader = new Mock<IUserSessionReader>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<RefreshTokenHandler>>();

        // SUT (System Under Test)
        var handler = new RefreshTokenHandler(
            refreshTokenReader.Object,
            dateTimeService.Object,
            refreshTokenRepository.Object,
            tokenService.Object,
            userContext.Object,
            userReader.Object,
            userSessionReader.Object,
            dispatcher.Object,
            logger.Object);

        // access token
        var accessToken = "access_token";

        // refresh token
        var refreshToken = "refresh_token";

        // existingToken
        var existingToken = new ApplicationRefreshToken();

        // user ID
        var userId = existingToken.UserId;

        // session ID
        var sessionId = Guid.NewGuid();

        userContext
            .Setup(x => x.SessionId)
            .Returns(sessionId);

        // user
        var user = new ApplicationUser();

        // user account data
        var userAccountData = new UserAccountData();

        // revokedAt
        var revokedAt = existingToken.RevokedAt;

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        var accessTokenExpiresAt = now.AddHours(1);
        var refreshTokenExpiresAt = now.AddDays(7);
        DateTimeOffset? userSessionExpiresAt = now.AddHours(1);

        userSessionReader
            .Setup(x => x.GetExpiresAtAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userSessionExpiresAt);

        // expected token result
        var tokenResult = new TokenResult(
            accessToken,
            refreshToken,
            accessTokenExpiresAt,
            refreshTokenExpiresAt);

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

        // Mock token service to return the expected token result
        tokenService
            .Setup(x => x.IssueAfterRefreshAsync(
                user,
                sessionId,
                existingToken,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(tokenResult);

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
        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
