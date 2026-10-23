using HelpDesk.src.Features.Auth.UserSession;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.UserSession;

public sealed class UserSessionTests
{
    [Fact]
    public async Task Should_revoke_user_session()
    {
        // Arrange
        var userSessionRepository = new Mock<IUserSessionRepository>();
        var userContext = new Mock<IUserContext>();

        var sessionOptions = Options.Create(new UserSessionOptions
        {
            DefaultSessionExpiryMinutes = 10,
            PersistentSessionExpiryDays = 7
        });

        var dispatcher = new Mock<IDomainEventDispatcher>();
        var logger = new Mock<ILogger<UserSessionHandler>>();

        // SUT (System Under Test)
        var handler = new UserSessionHandler(
            userSessionRepository.Object,
            userContext.Object,
            sessionOptions,
            dispatcher.Object,
            logger.Object);

        // user session
        var userSession = new ApplicationUserSession
        {
            IsPersistent = true
        };

        var user = new ApplicationUser();
        var occurredAt = new DateTimeOffset();
        var staySignedIn = true;
        var sessionId = Guid.NewGuid();

        // command
        var command = new UserSessionCommand(
            user,
            occurredAt,
            staySignedIn,
            sessionId);

        // now
        var now = command.OccurredAt;

        // session lifetime
        var sessionLifetime = userSession.IsPersistent
            ? TimeSpan.FromDays(sessionOptions.Value.PersistentSessionExpiryDays)
            : TimeSpan.FromMinutes(sessionOptions.Value.DefaultSessionExpiryMinutes);

        // session expiration time
        var expirationTime = now.Add(sessionLifetime);

        // user ID
        var userId = command.User.Id;

        var userAgent = "user_agent";
        var browser = "Chrome";
        var ipAddress = "ip_address";

        userContext
            .Setup(x => x.UserAgent)
            .Returns(userAgent);

        userContext
            .Setup(x => x.Browser)
            .Returns(browser);

        userContext
            .Setup(x => x.IpAddress)
            .Returns(ipAddress);

        // expected user session
        var expectedUserSession = new ApplicationUserSession
        {
            Id = command.SessionId,
            UserId = userId,
            UserAgent = userAgent,
            Browser = browser,
            IpAddress = ipAddress,
            CreatedAt = now,
            LastActivityAt = now,
            ExpiresAt = expirationTime,
            IsPersistent = command.StaySignedIn,
        };

        // user session repository
        userSessionRepository
            .Setup(x => x.AddAsync(
                userSession,
                It.IsAny<CancellationToken>()));

        // Act
        await handler.HandleAsync(
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
