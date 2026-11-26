using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Repositories;

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
                        userResult.Errors.First().Description));

                throw new InvalidOperationException(
                    string.Join(
                        ", ",
                        userResult.Errors.First().Description));
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
        user.IsDeleted = true;
        user.StatusId = UserStatusIds.Deleted;
        user.DeletedById = currentUserId;
        user.DeletedAt = now;

        if (user.Employee is not null)
        {
            var employee = await dbContext.Employees.FindAsync(
                [user.Employee], cancellationToken);

            if (employee is not null)
            {
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

    public async Task<int> UpdateAsync(
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

    public async Task<int> UpdatePasswordAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .ExecuteUpdateAsync(setters => setters
                    .SetProperty(u => u.LastPasswordChangedAt, now)
                    .SetProperty(u => u.LastPasswordChangedById, userId)
                    .SetProperty(u => u.MustResetPassword, false),
                cancellationToken);
    }

    public async Task<int> ResetPasswordAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .ExecuteUpdateAsync(setters => setters
                    .SetProperty(u => u.LastPasswordChangedAt, now)
                    .SetProperty(u => u.LastPasswordChangedById, userId)
                    .SetProperty(u => u.MustResetPassword, true),
                cancellationToken);
    }

    //----- Settings -----

    // UpdateById (after settings)
    public async Task<int> UpdateByIdAsync(
        Guid userId,
        Guid updaterUserId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .ExecuteUpdateAsync(setters => setters
                    .SetProperty(u => u.UpdatedById, updaterUserId),
                cancellationToken);
    }

    // TimeZone
    public async Task<int> UpdateTimeZoneAsync(
        Guid userId,
        Guid timeZoneId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .ExecuteUpdateAsync(setters => setters
                    .SetProperty(u => u.TimeZoneId, timeZoneId),
                cancellationToken);
    }

    // PreferredLanguage
    public async Task<int> UpdatePreferredLanguageAsync(
        Guid userId,
        Guid preferredLanguageId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .ExecuteUpdateAsync(setters => setters
                    .SetProperty(u => u.PreferredLanguageId, preferredLanguageId),
                cancellationToken);
    }

    // Branch
    public async Task<int> UpdateBranchAsync(
        Guid userId,
        Guid branchId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Employees
            .Where(e => e.UserId == userId)
            .ExecuteUpdateAsync(
                setters => setters
                    .SetProperty(e => e.BranchId, branchId),
                cancellationToken);
    }

    // Department
    public async Task<int> UpdateDepartmentAsync(
        Guid userId,
        Guid departmentId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Employees
            .Where(e => e.UserId == userId)
            .ExecuteUpdateAsync(
                setters => setters
                    .SetProperty(e => e.DepartmentId, departmentId),
                cancellationToken);
    }

    // Sector
    public async Task<int> UpdateSectorAsync(
        Guid userId,
        Guid sectorId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Employees
            .Where(e => e.UserId == userId)
            .ExecuteUpdateAsync(
                setters => setters
                    .SetProperty(e => e.SectorId, sectorId),
                cancellationToken);
    }

    // Company
    public async Task<int> UpdateCompanyAsync(
        Guid userId,
        Guid companyId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Employees
            .Where(e => e.UserId == userId)
            .ExecuteUpdateAsync(
                setters => setters
                    .SetProperty(e => e.CompanyId, companyId),
                cancellationToken);
    }

    // Country
    public async Task<int> UpdateCountryAsync(
        Guid userId,
        Guid countryId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Employees
            .Where(e => e.UserId == userId)
            .ExecuteUpdateAsync(
                setters => setters
                    .SetProperty(e => e.CompanyId, countryId),
                cancellationToken);
    }



    // PhoneNumber
    public async Task<int> UpdatePhoneNumberAsync(
        Guid userId,
        string phoneNumber,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(e => e.Id == userId)
            .ExecuteUpdateAsync(
                setters => setters
                    .SetProperty(e => e.PhoneNumber, phoneNumber)
                    .SetProperty(e => e.PhoneNumberConfirmed, false),
                cancellationToken);
    }
}
