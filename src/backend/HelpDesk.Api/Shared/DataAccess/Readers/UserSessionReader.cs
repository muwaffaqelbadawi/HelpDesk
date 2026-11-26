using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Readers;

public sealed class UserSessionReader(AppDbContext dbContext) : IUserSessionReader
{
    public async Task<ApplicationUserSession?> GetCurrentAsync(
        Guid sessionId,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.UserSessions
            .AsNoTracking()
            .FirstOrDefaultAsync(s => s.Id == sessionId, cancellationToken);
    }

    public async Task<DateTimeOffset?> GetExpiresAtAsync(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.UserSessions
            .AsNoTracking()
            .Where(s => s.UserId == userId)
            .OrderByDescending(s => s.CreatedAt)
            .Select(s => s.ExpiresAt)
            .FirstOrDefaultAsync(cancellationToken);
    }
}
