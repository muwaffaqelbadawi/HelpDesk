using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

public sealed class RefreshTokenRepository(AppDbContext dbContext) : IRefreshTokenRepository
{
    public async Task AddAsync(
        ApplicationRefreshToken refreshToken,
        CancellationToken cancellationToken)
    {
        dbContext.RefreshTokens.Add(refreshToken);

        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> RevokeAllAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.RefreshTokens
            .Where(x => x.UserId == userId
                && x.RevokedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(x => x.RevokedAt, now),
                    cancellationToken);
    }
}
