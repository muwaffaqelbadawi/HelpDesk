using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.Repositories;

public sealed class UserRepository(
    UserManager<ApplicationUser> userManager,
    AppDbContext dbContext,
    ILogger<UserRepository> logger)
        : IUserRepository
{
    public async Task AddAsync(ApplicationUser user)
    {
        await userManager.UpdateAsync(user);
    }

    public async Task AddAsync(
        ApplicationUser user,
        Employee employee,
        string tempPassword,
        CancellationToken cancellationToken)
    {
        using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            dbContext.Employees.Add(employee);

            var userResult = await userManager.CreateAsync(
                user,
                tempPassword);

            if (!userResult.Succeeded)
            {
                logger.LogWarning(
                    "Failed to create user. Errors: {Errors}",
                    string.Join(
                        ", ",
                        userResult.Errors.Select(e => e.Description)));

                throw new InvalidOperationException(
                    string.Join(
                        ", ",
                        userResult.Errors.Select(e => e.Description)));
            }

            await dbContext.SaveChangesAsync(cancellationToken);

            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);

            throw;
        }
    }

    public async Task DeleteAsync(
        ApplicationUser user,
        Guid currentUserId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        // Check for EmployeeId
        if (user.Employee is not null)
        {
            // lookup employee
            var employee = await dbContext.Employees.FindAsync(
                [user.Employee], cancellationToken);

            // Ensure an employee with ID user.EmployeeId exists
            if (employee is not null)
            {
                // Soft-delete the employee
                employee.IsDeleted = true;
                employee.DeletedById = currentUserId;
                employee.DeletedAt = now;
            }
        }

        using var transaction = await dbContext.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            await userManager.UpdateAsync(user);
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
