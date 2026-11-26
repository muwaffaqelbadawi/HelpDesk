using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Readers;

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
