using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class TokenService : ITokenService
{
    private readonly IDateTimeService _dateTimeService;
    private readonly AppDbContext _dbContext;
    private readonly ITokenIssuer _tokenIssuer;
    private readonly IUserContext _userContext;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;

    public TokenService(
        IDateTimeService dateTimeService,
        AppDbContext dbContext,
        ITokenIssuer tokenIssuer,
        IUserContext userContext,
        IRefreshTokenRevocationService refreshTokenRevocationService)
    {
        _dateTimeService = dateTimeService;
        _dbContext = dbContext;
        _tokenIssuer = tokenIssuer;
        _userContext = userContext;
        _refreshTokenRevocationService = refreshTokenRevocationService;
    }

    public async Task<TokenResult> IssueAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        var now = _dateTimeService.UtcNow;

        // Issue new tokens
        var token = await _tokenIssuer.IssueAsync(
            user,
            cancellationToken);

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

        // Add new refresh token entity to DB
        _dbContext.RefreshTokens.Add(newRefreshTokenEntity);

        // Persist everything
        await _dbContext.SaveChangesAsync(cancellationToken);

        return token;
    }

    public async Task<TokenResult> IssueAfterLoginAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        return await IssueAsync(user, cancellationToken);
    }

    public async Task<TokenResult> IssueAfterRefreshAsync(
        ApplicationUser user,
        ApplicationRefreshToken existingToken,
        CancellationToken cancellationToken)
    {
        existingToken.RevokedAt = _dateTimeService.UtcNow;

        return await IssueAsync(user, cancellationToken);
    }

    public async Task<TokenResult> IssueAfterPasswordChangeAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRevocationService.RevokeAllAsync(
            user.Id,
            cancellationToken);

        return await IssueAsync(user, cancellationToken);
    }

    public async Task<TokenResult> IssueAfterResetPasswordAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRevocationService.RevokeAllAsync(
            user.Id,
            cancellationToken);

        return await IssueAsync(user, cancellationToken);
    }

    public async Task<TokenResult> IssueAfterResetForgottenPasswordAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        // Revoke all refresh tokens
        await _refreshTokenRevocationService.RevokeAllAsync(
            user.Id,
            cancellationToken);

        return await IssueAsync(user, cancellationToken);
    }
}
