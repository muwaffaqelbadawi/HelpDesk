using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.DataAccess.Queries;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Readers;

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
