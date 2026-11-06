using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class RefreshTokenReader(AppDbContext dbContext) : IRefreshTokenReader
{
    public async Task<ApplicationRefreshToken?> GetRefreshTokenAsync(
        string refreshToken,
        CancellationToken cancellationToken)
    {
        return await dbContext.RefreshTokens
            .AsNoTracking()
            .Where(x => x.Token == refreshToken)
            .OrderByDescending(x => x.CreatedAt)
            .FirstOrDefaultAsync(cancellationToken);
    }

    public async Task<ApplicationRefreshToken?> GetActiveRefreshTokenAsync(
        Guid userId,
        Guid userSessionId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.RefreshTokens
            .AsNoTracking()
            .Where(x =>
                x.UserId == userId &&
                x.UserSessionId == userSessionId &&
                x.RevokedAt == null &&
                x.ExpiresAt > now)
            .OrderByDescending(x => x.CreatedAt)
            .ThenByDescending(x => x.Id)
            .FirstOrDefaultAsync(cancellationToken);
    }
}
