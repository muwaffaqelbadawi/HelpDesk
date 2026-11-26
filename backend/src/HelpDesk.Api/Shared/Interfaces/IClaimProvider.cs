using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IClaimProvider
{
    IDictionary<string, object> GetClaims(
        ApplicationUser user,
        Guid sessionId);
}
