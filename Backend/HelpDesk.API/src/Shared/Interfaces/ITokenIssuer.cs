using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITokenIssuer
{
    Task<TokenResult> IssueAsync(
        ApplicationUser user,
        CancellationToken cancellationToken = default);
}
