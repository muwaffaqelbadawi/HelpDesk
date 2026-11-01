using HelpDesk.src.Features.Auth.UserSession.SessionActivity;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.UserSession;

public sealed class UserSessionActivityTests
{
    [Fact]
    public async Task Should_update_an_active_user_session()
    {
        // Arrange
        var dateTimeService = new Mock<IDateTimeService>();

        var sessionOptions = Options.Create(new UserSessionOptions
        {
            DefaultSessionExpiryMinutes = 10,
            PersistentSessionExpiryDays = 7
        });

        var userSessionReader = new Mock<IUserSessionReader>();
        var userSessionRepository = new Mock<IUserSessionRepository>();

        // SUT (System Under Test)
        var handler = new UserSessionActivityHandler(
            dateTimeService.Object,
            sessionOptions,
            userSessionReader.Object,
            userSessionRepository.Object);

        // now
        var now = DateTimeOffset.UtcNow;

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        // command
        var command = new UserSessionActivityCommand(
            SessionId: Guid.NewGuid());

        // session ID
        var sessionId = command.SessionId;

        // user session
        var userSession = new ApplicationUserSession
        {
            IsPersistent = true,
            ExpiresAt = now.AddDays(1)
        };

        // user session reader
        userSessionReader
            .Setup(x => x.GetCurrentAsync(
                sessionId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(userSession);

        // lifetime
        var lifetime = userSession.IsPersistent
            ? TimeSpan.FromDays(sessionOptions.Value.PersistentSessionExpiryDays)
            : TimeSpan.FromMinutes(sessionOptions.Value.DefaultSessionExpiryMinutes);

        // update
        userSessionRepository
            .Setup(x => x.UpdateAsync(
                userSession,
                now,
                lifetime,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(1);

        // Act
        await handler.HandleAsync(
            command,
            CancellationToken.None);

        userSessionRepository.Verify(x => x.UpdateAsync(
            userSession,
            now,
            lifetime,
            It.IsAny<CancellationToken>()),
            Times.Once);
    }

    [Fact]
    public async Task Should_reject_a_session_revoked_after_it_was_read()
    {
        var now = DateTimeOffset.UtcNow;
        var sessionId = Guid.NewGuid();
        var session = new ApplicationUserSession
        {
            Id = sessionId,
            ExpiresAt = now.AddHours(1)
        };
        var dateTimeService = new Mock<IDateTimeService>();
        dateTimeService.Setup(x => x.UtcNow).Returns(now);

        var userSessionReader = new Mock<IUserSessionReader>();
        userSessionReader
            .Setup(x => x.GetCurrentAsync(
                sessionId,
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(session);

        var userSessionRepository = new Mock<IUserSessionRepository>();
        userSessionRepository
            .Setup(x => x.UpdateAsync(
                session,
                now,
                It.IsAny<TimeSpan>(),
                It.IsAny<CancellationToken>()))
            .ReturnsAsync(0);

        var handler = new UserSessionActivityHandler(
            dateTimeService.Object,
            Options.Create(new UserSessionOptions()),
            userSessionReader.Object,
            userSessionRepository.Object);

        await Assert.ThrowsAsync<AuthenticationRequiredException>(() =>
            handler.HandleAsync(
                new UserSessionActivityCommand(sessionId),
                CancellationToken.None));
    }
}
