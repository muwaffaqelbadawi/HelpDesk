using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserSessionService
{
    ApplicationUserSession CreateUserSession(
        Guid userId,
        Guid userSessionId,
        bool staySignedIn,
        DateTimeOffset now);
}
