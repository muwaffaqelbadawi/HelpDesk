using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Login;

public sealed class LoginTests
{
    [Theory]
    [InlineData(false, 30)]
    [InlineData(true, 7 * 24 * 60)]
    public async Task Should_login_successfully(
        bool staySignedIn,
        int sessionLifetimeMinutes)
    {
        // Arrange
        var identityResolver = new Mock<IIdentityResolver>();
        var userSessionService = new Mock<IUserSessionService>();
        var tokenIssuer = new Mock<ITokenIssuer>();
        var userLoginRepository = new Mock<IUserLoginRepository>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<LoginHandler>>();

        // SUT (System Under Test)
        var handler = new LoginHandler(
            identityResolver.Object,
            userSessionService.Object,
            tokenIssuer.Object,
            userLoginRepository.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // create new user
        var user = new ApplicationUser
        {
            Id = Guid.NewGuid(),
        };

        // resolve identity
        identityResolver
            .Setup(x => x.ResolveIdentity(
                It.IsAny<LoginCommand>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(user);

        // resolve password
        identityResolver
            .Setup(x => x.ResolvePassword(
                It.IsAny<ApplicationUser>(),
                It.IsAny<LoginCommand>()));

        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        var accessTokenExpiresAt = now.AddHours(1);
        var refreshTokenExpiresAt = now.AddMinutes(sessionLifetimeMinutes);

        // expected token result
        var tokenResult = new TokenResult(
            AccessToken: "access_token",
            RefreshToken: "refresh_token",
            AccessTokenExpiresAt: accessTokenExpiresAt,
            RefreshTokenExpiresAt: refreshTokenExpiresAt);

        // user session
        userSessionService
            .Setup(x => x.CreateUserSession(
                user.Id,
                It.IsAny<Guid>(),
                It.IsAny<bool>(),
                now))
            .Returns((Guid userId, Guid sessionId, bool _, DateTimeOffset _) =>
                new ApplicationUserSession
                {
                    Id = sessionId,
                    UserId = userId,
                    ExpiresAt = refreshTokenExpiresAt
                });

        // Mock token service to return the expected token result
        tokenIssuer
            .Setup(x => x.IssueTokenObject(
                It.IsAny<ApplicationUser>(),
                It.IsAny<Guid>(),
                refreshTokenExpiresAt))
            .Returns(tokenResult);

        tokenIssuer
            .Setup(x => x.CreateRefreshTokenObject(
                user,
                It.IsAny<Guid>(),
                tokenResult))
            .Returns((ApplicationUser issuedUser, Guid sessionId, TokenResult issuedToken) =>
                new ApplicationRefreshToken
                {
                    Token = issuedToken.RefreshToken,
                    UserId = issuedUser.Id,
                    UserSessionId = sessionId,
                    ExpiresAt = issuedToken.RefreshTokenExpiresAt
                });

        // create new user account data
        var userAccountData = new UserAccountData();

        userReader
            .Setup(x => x.GetByIdAsync(
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userAccountData);

        var command = new LoginCommand(
            Username: string.Empty,
            Password: string.Empty,
            StaySignedIn: staySignedIn);

        // Act
        var result = await handler.HandleAsync(
            command,
            CancellationToken.None);

        // Assert
        Assert.Equal(tokenResult, result.Token);
        userLoginRepository.Verify(x => x.AddAsync(
            It.Is<ApplicationUserSession>(session =>
                session.Id != Guid.Empty
                && session.ExpiresAt == result.Token.RefreshTokenExpiresAt),
            It.Is<ApplicationRefreshToken>(token =>
                token.Token == result.Token.RefreshToken
                && token.UserId == user.Id
                && token.UserSessionId != Guid.Empty
                && token.ExpiresAt == result.Token.RefreshTokenExpiresAt),
            It.IsAny<CancellationToken>()), Times.Once);
        userSessionService.Verify(x => x.CreateUserSession(
            user.Id,
            It.IsAny<Guid>(),
            staySignedIn,
            now), Times.Once);
        tokenIssuer.Verify(x => x.IssueTokenObject(
            user,
            It.IsAny<Guid>(),
            refreshTokenExpiresAt), Times.Once);
        dispatcher.Verify(
            x => x.DispatchAsync(
                It.IsAny<IDomainEvent>(),
                It.IsAny<CancellationToken>()),
            Times.Once);
    }
}
