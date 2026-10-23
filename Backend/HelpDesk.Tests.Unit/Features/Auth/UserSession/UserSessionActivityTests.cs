using HelpDesk.src.Features.Auth.UserSession.SessionActivity;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.UserSession;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Features.Auth.UserSession;

public sealed class UserSessionActivityTests
{
    [Fact]
    public async Task Should_check_revoked_user_session()
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
            IsPersistent = true
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
                It.IsAny<CancellationToken>()));
    }
}
