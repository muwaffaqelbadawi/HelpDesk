using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Projections;

public static class SuperadminQueries
{
    public static IQueryable<SuperadminAccountData> SelectAdminAccount(
        this IQueryable<ApplicationUser> query)
    {
        return query.Select(u => new SuperadminAccountData
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
}
