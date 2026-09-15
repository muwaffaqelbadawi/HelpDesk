using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Projections;

public static class UserQueries
{
    public static IQueryable<UserAccountData> SelectUserAccount(
        this IQueryable<ApplicationUser> query)
    {
        return query.Select(
            u => new UserAccountData
            {
                UserId = u.Id,
                UserName = u.UserName ?? string.Empty,
                Email = u.Email ?? string.Empty,
                TimeZone = u.TimeZone,

                PreferredLanguage = u.PreferredLanguage == UserLanguage.English
                    ? nameof(UserLanguage.English)
                    : nameof(UserLanguage.Arabic),

                Roles = u.UserRoles
                    .Where(ur => ur.RemovedAt == null)
                    .Select(ur => ur.Role.Name ?? string.Empty)
                    .ToList(),

                MustChangePassword = u.MustChangePassword,
                RowVersion = u.RowVersion,

                Employee = u.Employee != null
                ? new EmployeeData
                {
                    EmployeeId = u.Employee.Id,
                    EmployeeNumber = u.Employee.Number,
                    FullEnName = u.Employee.FullEnName,
                    FullArName = u.Employee.FullArName,

                    Department = u.Employee.Department != null
                        ? u.Employee.Department.Name
                        : null,

                    Sector = u.Employee.Sector != null
                        ? u.Employee.Sector.Name
                        : null,

                    Country = u.Employee.Country.Name,
                    RowVersion = u.Employee.RowVersion
                }
                : null,
            });
    }
}
