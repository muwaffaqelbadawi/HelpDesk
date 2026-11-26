using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IUserSessionService
{
    ApplicationUserSession CreateUserSession(
        Guid userId,
        Guid userSessionId,
        bool staySignedIn,
        DateTimeOffset now);
}
