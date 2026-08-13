using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Jwt;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITokenService
{
    Task<TokenResult> IssueAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterLoginAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterRefreshAsync(
        ApplicationUser user,
        ApplicationRefreshToken existingToken,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterPasswordChangeAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterResetPasswordAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);

    Task<TokenResult> IssueAfterResetForgottenPasswordAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);
}
