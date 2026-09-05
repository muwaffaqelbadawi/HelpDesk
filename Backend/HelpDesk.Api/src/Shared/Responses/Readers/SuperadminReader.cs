using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.Responses.Readers;

public sealed class SuperadminReader(
    AppDbContext dbContext) : ISuperadminReader
{
    public async Task<SuperadminAccountData> GetSuperadminAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectAdminAccount()
            .SingleAsync(cancellationToken);
    }
}
