using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Projections;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class SuperadminReader(
    UserManager<ApplicationUser> userManager,
    AppDbContext dbContext)
        : ISuperadminReader
{
    public async Task<ApplicationUser?> CheckExistingSuperadminAsync(
        CancellationToken cancellationToken)
    {
        return await userManager.Users
            .AsNoTracking()
            .SingleOrDefaultAsync(
                u => u.NormalizedUserName == "SUPERADMIN",
                cancellationToken);
    }

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
