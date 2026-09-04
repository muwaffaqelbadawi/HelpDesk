using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.IdentityBuilders;

public sealed class IdentityFilter(ILookupNormalizer normalizer)
{
    public IQueryable<ApplicationUser> Apply(
        LoginCommand command,
        IQueryable<ApplicationUser> query)
    {
        var normalizedName = normalizer.NormalizeName(command.Identity);
        var normalizedEmail = normalizer.NormalizeEmail(command.Identity);

        bool isEmployeeNumber = IdentityClassifier.IsEmployeeNumber(normalizedName);
        bool isEmail = IdentityClassifier.IsEmail(normalizedEmail);

        return isEmployeeNumber
            ? query.Where(u =>
                u.Employee != null &&
                u.Employee.Number == normalizedName)
            : isEmail
            ? query.Where(u =>
                u.NormalizedEmail == normalizedEmail)
            : query.Where(u =>
                u.NormalizedUserName == normalizedName);
    }

    public string IdentityType(LoginCommand command)
    {
        var normalizedName = normalizer.NormalizeName(command.Identity);
        var normalizedEmail = normalizer.NormalizeEmail(command.Identity);

        bool isEmployeeNumber = IdentityClassifier.IsEmployeeNumber(normalizedName);
        bool isEmail = IdentityClassifier.IsEmail(normalizedEmail);

        return isEmployeeNumber ? "Employee Number" : isEmail ? "Email" : "Username";
    }
}
