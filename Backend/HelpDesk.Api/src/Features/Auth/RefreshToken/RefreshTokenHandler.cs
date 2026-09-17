using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed class RefreshTokenHandler :
    ICommandHandler<RefreshTokenCommand, RefreshTokenResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly AppDbContext _dbContext;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;
    private readonly ITokenService _tokenService;
    private readonly ILogger<RefreshTokenHandler> _logger;

    public RefreshTokenHandler(
        IDateTimeService dateTimeService,
        IUserContext userContext,
        IUserProvider userProvider,
        AppDbContext dbContext,
        IRefreshTokenRevocationService refreshTokenRevocationService,
        ITokenService tokenService,
        ILogger<RefreshTokenHandler> logger)
    {
        _dateTimeService = dateTimeService;
        _userContext = userContext;
        _userProvider = userProvider;
        _dbContext = dbContext;
        _refreshTokenRevocationService = refreshTokenRevocationService;
        _tokenService = tokenService;
        _logger = logger;
    }

    public async Task<RefreshTokenResponse> HandleAsync(
        RefreshTokenCommand command,
        CancellationToken cancellationToken)
    {
        // Find the refresh token
        var existingToken = await _dbContext.RefreshTokens
            .SingleOrDefaultAsync(x => x.Token == command.RefreshToken, cancellationToken);

        var userId = _userContext.GuidUserId;

        if (existingToken is null)
        {
            _logger.LogWarning("Refresh token not found for user {UserId}.",
                userId);

            throw new AuthorizationFailedException("Invalid refresh token.");
        }

        // Check if already revoked
        if (existingToken.RevokedAt is not null)
        {
            _logger.LogWarning(
               "Refresh token reused or revoked for user {UserId}. Revoked at: {RevokedAt}",
               existingToken.UserId,
               existingToken.RevokedAt);

            // Security: If a revoked token is used, revoke ALL tokens for this user
            // This handles token theft detection
            await _refreshTokenRevocationService.RevokeAllAsync(
                existingToken.UserId,
                cancellationToken);

            throw new AuthenticationFailedException("Invalid refresh token.");
        }

        // Check expiry
        if (existingToken.ExpiresAt <= _dateTimeService.UtcNow)
        {
            _logger.LogWarning("Expired refresh token used for user {UserId}",
                existingToken.UserId);

            throw new AuthenticationFailedException("Refresh token has expired.");
        }

        var stringUserId = _userContext.UserId;

        var user = await _userProvider.GetUserAsync(stringUserId)
            ?? throw new AuthenticationRequiredException();

        // Issue new token
        var token = await _tokenService.IssueAfterRefreshAsync(
            user,
            existingToken,
            cancellationToken);

        // Get user roles (if found)
        var roles = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId && ur.RemovedAt == null)
            .Select(ur => ur.Role.Name ?? string.Empty)
            .ToListAsync(cancellationToken);

        var userAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);

        return new RefreshTokenResponse(
            UserAccountData: userAccountData,
            Token: token);
    }
}
