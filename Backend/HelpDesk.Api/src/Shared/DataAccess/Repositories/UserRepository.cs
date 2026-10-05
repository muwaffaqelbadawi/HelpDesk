using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Repositories;

public sealed class UserRepository(
    UserManager<ApplicationUser> userManager,
    AppDbContext dbContext,
    ILogger<UserRepository> logger)
        : IUserRepository
{
    public async Task AddAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        dbContext.Users.Add(user);
        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task AddToHistory(
        Guid userId,
        UserHistoryType type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default)
    {
        var userHistory = new ApplicationUserHistory
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            Type = type,
            Description = type switch
            {
                UserHistoryType.Created => "User created",
                UserHistoryType.Updated => "User updated",
                UserHistoryType.PasswordChanged => "Password changed",
                UserHistoryType.PasswordReset => "Password reset",
                UserHistoryType.LoggedIn => "User logged in",
                UserHistoryType.LoggedOut => "User logged out",
                UserHistoryType.RoleChanged => "User role changed",
                _ => null
            },

            OccurredAt = occurredAt
        };

        dbContext.UserHistories.Add(userHistory);

        await dbContext.SaveChangesAsync(cancellationToken);
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
        // Soft-delete user
        user.IsDeleted = true;
        user.StatusId = UserStatusIds.Deleted;
        user.DeletedById = currentUserId;
        user.DeletedAt = now;

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

        using var transaction = await dbContext
            .Database.BeginTransactionAsync(cancellationToken);

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

    public async Task UpdateAsync(
        ApplicationUser user,
        CancellationToken cancellationToken)
    {
        await userManager.UpdateAsync(user);
        await dbContext.SaveChangesAsync(cancellationToken);
    }

    public async Task<int> UpdateAsync(
        Guid currentUserId,
        Guid userId,
        string userName,
        string email,
        string fullEnName,
        string fullArName,
        DateTimeOffset now,
        byte[] employeeRowVersion,
        byte[] userRowVersion,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId
                && u.Employee != null
                && u.RowVersion == userRowVersion
                && u.Employee.RowVersion == employeeRowVersion
                && u.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(u => u.UserName, userName)
                .SetProperty(u => u.Email, email)
                .SetProperty(u => u.Employee!.FullEnName, fullEnName)
                .SetProperty(u => u.Employee!.FullArName, fullArName)
                .SetProperty(u => u.UpdatedById, currentUserId)
                .SetProperty(u => u.UpdatedAt, now),
            cancellationToken);
    }

    public async Task<int> UpdateCurrentAsync(
        Guid userId,
        string userName,
        string email,
        string fullEnName,
        string fullArName,
        DateTimeOffset now,
        byte[] employeeRowVersion,
        byte[] userRowVersion,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId
                && u.Employee != null
                && u.RowVersion == userRowVersion
                && u.Employee.RowVersion == employeeRowVersion
                && u.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(u => u.UserName, userName)
                .SetProperty(u => u.Email, email)
                .SetProperty(u => u.Employee!.FullEnName, fullEnName)
                .SetProperty(u => u.Employee!.FullArName, fullArName)
                .SetProperty(u => u.UpdatedById, userId)
                .SetProperty(u => u.UpdatedAt, now),
            cancellationToken);
    }
}
