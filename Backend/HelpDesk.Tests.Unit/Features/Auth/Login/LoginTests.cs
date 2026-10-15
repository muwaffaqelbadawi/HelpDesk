using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.Extensions.Logging;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.Login;

public sealed class LoginTests
{
    [Fact]
    public async Task Should_login_successfully()
    {
        // Arrange
        var identityResolver = new Mock<IIdentityResolver>();
        var tokenService = new Mock<ITokenService>();
        var userReader = new Mock<IUserReader>();
        var dateTimeService = new Mock<IDateTimeService>();
        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<LoginHandler>>();

        // SUT (System Under Test)
        var handler = new LoginHandler(
            identityResolver.Object,
            tokenService.Object,
            userReader.Object,
            dateTimeService.Object,
            dispatcher.Object,
            logger.Object);

        // create new user
        var user = new ApplicationUser();

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
        var refreshTokenExpiresAt = now.AddDays(7);

        // expected token result
        var tokenResult = new TokenResult(
            AccessToken: string.Empty,
            RefreshToken: string.Empty,
            AccessTokenExpiresAt: accessTokenExpiresAt,
            RefreshTokenExpiresAt: refreshTokenExpiresAt);

        // Mock token service to return the expected token result
        tokenService
            .Setup(x => x.IssueAfterLoginAsync(
                It.IsAny<ApplicationUser>(),
                It.IsAny<Guid>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(tokenResult);

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
            StaySignedIn: false);

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
