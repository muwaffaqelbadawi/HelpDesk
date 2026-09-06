using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Repositories;

public sealed class SuperadminRepository(
    UserManager<ApplicationUser> userManager,
    AppDbContext dbContext,
    ILogger<SuperadminRepository> logger)
        : ISuperadminRepository
{
    public async Task AddAsync(
        ApplicationUser superadmin,
        string tempPassword,
        ApplicationUserRole superadminRoleEntity,
        CancellationToken cancellationToken)
    {
        using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // Create a new user
            var superadminResult = await userManager.CreateAsync(
                superadmin,
                tempPassword);

            // Check for user creation success
            if (!superadminResult.Succeeded)
            {
                logger.LogWarning(
                    "Failed to create superadmin. Errors: {Errors}",
                    string.Join(
                        ", ",
                        superadminResult.Errors.Select(e => e.Description)));

                throw new InvalidOperationException(
                    string.Join(
                        ", ",
                        superadminResult.Errors.Select(e => e.Description)));
            }

            dbContext.UserRoles.Add(superadminRoleEntity);

            await dbContext.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);

            throw;
        }
    }
}
