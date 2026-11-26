using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.Jwt;

namespace HelpDesk.Shared.Interfaces;

public interface ITokenService
{
    Task<TokenResult> IssueAfterPasswordChangeAsync(
        ApplicationUser user,
        Guid sessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterResetPasswordAsync(
        ApplicationUser user,
        Guid sessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken);
}
