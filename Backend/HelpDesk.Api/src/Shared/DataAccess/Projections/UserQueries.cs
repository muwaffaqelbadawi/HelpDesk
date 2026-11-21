using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Shared.DataAccess.Projections;

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

                TimeZoneId = u.TimeZoneId,

                TimeZone = u.TimeZone != null
                    ? u.TimeZone.Name
                    : null,

                PreferredLanguageId = u.PreferredLanguageId,

                PreferredLanguage = u.PreferredLanguage != null
                        ? u.PreferredLanguage.Name
                        : null,

                Roles = u.UserRoles
                    .Where(ur => ur.RemovedAt == null)
                    .Select(ur => ur.Role.Name ?? string.Empty)
                    .ToList(),

                MustResetPassword = u.MustResetPassword,
                RowVersion = u.RowVersion,

                Employee = u.Employee != null
                ? new EmployeeData
                {
                    EmployeeId = u.Employee.Id,
                    EmployeeNumber = u.Employee.Number,
                    FullEnName = u.Employee.FullEnName,
                    FullArName = u.Employee.FullArName,
                    JobTitle = u.Employee.JobTitle,

                    DepartmentId = u.Employee.DepartmentId,

                    Department = u.Employee.Department != null
                        ? u.Employee.Department.Name
                        : null,

                    SectorId = u.Employee.SectorId,

                    Sector = u.Employee.Sector != null
                        ? u.Employee.Sector.Name
                        : null,

                    CountryId = u.Employee.Country.Id,
                    Country = u.Employee.Country.Name,
                    RowVersion = u.Employee.RowVersion
                }
                : null,
            }
        );
    }
}
