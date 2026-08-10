using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IJwtProvider
{
    Task<string> GenerateAccessToken(
        ApplicationUser user,
        CancellationToken cancellationToken = default);
}
