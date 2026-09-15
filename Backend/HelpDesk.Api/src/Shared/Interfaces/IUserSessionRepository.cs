using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserSessionRepository
{
    Task AddAsync(
        ApplicationUserSession userSession,
        CancellationToken cancellationToken);
}
