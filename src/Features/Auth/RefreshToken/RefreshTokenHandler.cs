using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Auth.RefreshToken;

public sealed class RefreshTokenHandler :
    ICommandHandler<RefreshTokenCommand, RefreshTokenResponse>
{
    private readonly IDateTimeService _dateTimeService;
    private readonly IUserProvider _userProvider;
    private readonly AppDbContext _dbContext;
    private readonly IRefreshTokenRevocationService _refreshTokenRevocationService;
    private readonly ITokenService _tokenService;
    private readonly ILogger<RefreshTokenHandler> _logger;

    public RefreshTokenHandler(
        IDateTimeService dateTimeService,
        IUserProvider userProvider,
        AppDbContext dbContext,
        IRefreshTokenRevocationService refreshTokenRevocationService,
        ITokenService tokenService,
        ILogger<RefreshTokenHandler> logger)
    {
        _dateTimeService = dateTimeService;
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
        //self - service change

        // Resolve currentUser with ID
        var user = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Find the refresh token
        var existingToken = await _dbContext.RefreshTokens
            .Include(x => x.User)
            .FirstOrDefaultAsync(x => x.Token == command.RefreshToken, cancellationToken);

        if (existingToken is null)
        {
            _logger.LogWarning("Refresh token not found for value ending with: {TokenSuffix}",
                command.RefreshToken[^6..]);

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

        // Issue new token
        var token = await _tokenService.IssueAfterRefreshAsync(
            user,
            existingToken,
            cancellationToken);

        // Get user roles (if found)
        var roles = await _dbContext.UserRoles
            .Where(ur => ur.UserId == user.Id && ur.RemovedAt == null)
            .Select(ur => ur.Role.Name)
            .ToListAsync(cancellationToken);

        // Defensive check
        if (user.UserName is null || user.Email is null)
        {
            throw new InvalidOperationException(
                $"User {user.Id} is missing required profile information.");
        }

        return new RefreshTokenResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion),
            Roles: roles!,
            Token: token);
    }
}
