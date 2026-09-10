using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DomainRules.Users.CreateUserAccount;

public sealed class SectorRules(AppDbContext dbContext)
    : ISectorRules
{
    public async Task<bool> IsActiveAsync(
        Guid sectorId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Sectors
            .AnyAsync(x => x.Id == sectorId && x.IsActive,
                cancellationToken);
    }
}
