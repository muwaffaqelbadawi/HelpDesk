using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Projections;

public static class UserQueries
{
    public static IQueryable<AdminData> SelectAdminAccount(
        this IQueryable<ApplicationUser> query)
    {
        return query.Select(u => new AdminData
        {
            UserId = u.Id,
            UserName = u.UserName ?? string.Empty,
            Email = u.Email ?? string.Empty,
            MustChangePassword = u.MustChangePassword,
            Roles = u.UserRoles
                .Where(ur => ur.UserId == u.Id && ur.RemovedAt == null)
                .Select(ur => ur.Role.Name ?? string.Empty)
                .ToList()
        });
    }

    public static IQueryable<UserAccountData> SelectUserAccount(
        this IQueryable<ApplicationUser> query)
    {
        return query.Select(u => new UserAccountData
        {
            UserId = u.Id,
            UserName = u.UserName ?? string.Empty,
            Email = u.Email ?? string.Empty,
            RowVersion = u.RowVersion,
            MustChangePassword = u.MustChangePassword,
            Roles = u.UserRoles
                .Where(ur => ur.UserId == u.Id && ur.RemovedAt == null)
                .Select(ur => ur.Role.Name ?? string.Empty)
                .ToList(),
            Employee = u.Employee != null
                ? new EmployeeData
                {
                    EmployeeId = u.Employee.Id,
                    EmployeeNumber = u.Employee.Number,
                    FullEnName = u.Employee.FullEnName,
                    FullArName = u.Employee.FullArName,
                    RowVersion = u.Employee.RowVersion
                } : null,
        });
    }
}
