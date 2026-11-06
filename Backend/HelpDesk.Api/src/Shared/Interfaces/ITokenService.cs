using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;

namespace HelpDesk.src.Shared.Interfaces;

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
