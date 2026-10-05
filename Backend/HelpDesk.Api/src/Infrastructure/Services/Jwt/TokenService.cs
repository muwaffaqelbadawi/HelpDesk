using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class TokenService : ITokenService
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IRefreshTokenRepository _refreshTokenRepository;
    private readonly ITokenIssuer _tokenIssuer;
    private readonly IUserContext _userContext;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;

    public TokenService(
        IDateTimeService dateTimeService,
        IRefreshTokenRepository refreshTokenRepository,
        ITokenIssuer tokenIssuer,
        IUserContext userContext,
        IRefreshTokenRevocationService refreshTokenRevocationService)
    {
        _dateTimeService = dateTimeService;
        _refreshTokenRepository = refreshTokenRepository;
        _tokenIssuer = tokenIssuer;
        _userContext = userContext;
        _refreshTokenRevocationService = refreshTokenRevocationService;
    }

    public async Task<TokenResult> IssueAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken)
    {
        var now = _dateTimeService.UtcNow;

        // Issue new tokens
        var token = _tokenIssuer.Issue(
            user,
            sessionId);

        // Create RefreshToken entity
        var newRefreshTokenEntity = new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            Token = token.RefreshToken,
            CreatedByIp = _userContext.IpAddress,
            CreatedAt = now,
            ExpiresAt = token.RefreshTokenExpiresAt,
            RevokedAt = null,
            UserId = user.Id,
            User = user,
            UserAgent = _userContext.UserAgent,
        };

        // Refresh token repo
        await _refreshTokenRepository.AddAsync(
            newRefreshTokenEntity,
            cancellationToken);

        return token;
    }

    public async Task<TokenResult> IssueAfterLoginAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken)
    {
        return await IssueAsync(
            user,
            sessionId,
            cancellationToken);
    }

    public async Task<TokenResult> IssueAfterRefreshAsync(
        ApplicationUser user,
        Guid sessionId,
        ApplicationRefreshToken existingToken,
        CancellationToken cancellationToken)
    {
        existingToken.RevokedAt = _dateTimeService.UtcNow;

        return await IssueAsync(
            user,
            sessionId,
            cancellationToken);
    }

    public async Task<TokenResult> IssueAfterPasswordChangeAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRevocationService.RevokeAllAsync(
            user.Id,
            cancellationToken);

        return await IssueAsync(
            user,
            sessionId,
            cancellationToken);
    }

    public async Task<TokenResult> IssueAfterResetPasswordAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRevocationService.RevokeAllAsync(
            user.Id,
            cancellationToken);

        return await IssueAsync(
            user,
            sessionId,
            cancellationToken);
    }

    public async Task<TokenResult> IssueAfterResetForgottenPasswordAsync(
        ApplicationUser user,
        Guid sessionId,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRevocationService.RevokeAllAsync(
            user.Id,
            cancellationToken);

        return await IssueAsync(
            user,
            sessionId,
            cancellationToken);
    }
}
