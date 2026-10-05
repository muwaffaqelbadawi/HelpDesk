using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IClaimProvider
{
    IDictionary<string, object> GetClaims(
        ApplicationUser user,
        Guid sessionId);
}
