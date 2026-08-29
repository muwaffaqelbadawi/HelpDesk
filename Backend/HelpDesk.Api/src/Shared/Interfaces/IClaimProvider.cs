using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IClaimProvider
{
    Task<IDictionary<string, object>> GetClaimsAsync(
        ApplicationUser user,
        CancellationToken cancellationToken = default);
}
