using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class TokenService : ITokenService
{
    private readonly IRefreshTokenRepository _refreshTokenRepository;
    private readonly ITokenIssuer _tokenIssuer;
    private readonly IUserSessionReader _userSessionReader;

    public TokenService(
        IRefreshTokenRepository refreshTokenRepository,
        ITokenIssuer tokenIssuer,
        IUserSessionReader userSessionReader)
    {
        _refreshTokenRepository = refreshTokenRepository;
        _tokenIssuer = tokenIssuer;
        _userSessionReader = userSessionReader;
    }

    public async Task<TokenResult> IssueAfterPasswordChangeAsync(
        ApplicationUser user,
        Guid userSessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRepository.RevokeAllAsync(
            user.Id,
            now,
            cancellationToken);

        return await IssueAsync(
            user,
            userSessionId,
            now,
            cancellationToken);
    }

    public async Task<TokenResult> IssueAfterResetPasswordAsync(
        ApplicationUser user,
        Guid userSessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        await _refreshTokenRepository.RevokeAllAsync(
            user.Id,
            now,
            cancellationToken);

        return await IssueAsync(
            user,
            userSessionId,
            now,
            cancellationToken);
    }

    private async Task<TokenResult> IssueAsync(
        ApplicationUser user,
        Guid userSessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        var session = await _userSessionReader.GetCurrentAsync(
            userSessionId,
            cancellationToken);

        if (session?.ExpiresAt is null
            || session.ExpiresAt <= now
            || session.RevokedAt is not null)
        {
            throw new AuthenticationFailedException("User session is no longer active.");
        }

        var token = _tokenIssuer.IssueTokenObject(
            user,
            userSessionId,
            session.ExpiresAt.Value);
        var refreshToken = _tokenIssuer.CreateRefreshTokenObject(
            user,
            userSessionId,
            token);

        await _refreshTokenRepository.AddAsync(refreshToken, cancellationToken);

        return token;
    }
}
