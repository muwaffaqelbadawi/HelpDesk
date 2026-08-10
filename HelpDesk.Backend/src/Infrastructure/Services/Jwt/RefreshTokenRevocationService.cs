using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class RefreshTokenRevocationService : IRefreshTokenRevocationService
{
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<RefreshTokenRevocationService> _logger;

    public RefreshTokenRevocationService(
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<RefreshTokenRevocationService> logger)
    {
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<int> RevokeAllAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        var count = await _dbContext.RefreshTokens
            .Where(x => x.UserId == userId && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.RevokedAt, _dateTimeService.UtcNow),
                    cancellationToken);

        _logger.LogInformation("Revoked {Count} refresh tokens for user {UserId}",
            count,
            userId);

        return count;
    }
}
