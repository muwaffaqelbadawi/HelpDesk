using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.UserSession;

public sealed class UserSessionService(
    IOptions<UserSessionOptions> userSessionOptions)
        : IUserSessionService
{
    public ApplicationUserSession CreateUserSession(
        Guid userId,
        Guid userSessionId,
        bool staySignedIn,
        DateTimeOffset now)
    {
        // session lifetime
        var sessionLifetime = staySignedIn
            ? userSessionOptions.Value.PersistentSessionLifetime
            : userSessionOptions.Value.DefaultSessionLifetime;

        // session expiration time
        var expirationTime = now.Add(sessionLifetime);

        // Create new user session
        return new ApplicationUserSession
        {
            Id = userSessionId,
            UserId = userId,
            CreatedAt = now,
            LastActivityAt = now,
            ExpiresAt = expirationTime,
            IsPersistent = staySignedIn,
        };
    }
}
