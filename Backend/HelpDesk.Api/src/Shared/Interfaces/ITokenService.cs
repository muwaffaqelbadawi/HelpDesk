using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITokenService
{
    Task<TokenResult> IssueAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterLoginAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterRefreshAsync(
        ApplicationUser user,
        Guid sessionId,
        ApplicationRefreshToken existingToken,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterPasswordChangeAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterResetPasswordAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterResetForgottenPasswordAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken);
}
