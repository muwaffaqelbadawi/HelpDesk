using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Shared.IdentityBuilders;

public sealed class IdentityFilters
{
    private readonly ILookupNormalizer _normalizer;

    public IdentityFilters(
        ILookupNormalizer normalizer)
    {
        _normalizer = normalizer;
    }

    public IQueryable<ApplicationUser> Apply(
        IQueryable<ApplicationUser> query,
        LoginCommand request)
    {
        // Normalization
        var normalizedName =
            _normalizer.NormalizeName(request.Identity)
            ?? throw new InvalidOperationException(
                "Identity normalization failed.");

        var normalizedEmail =
            _normalizer.NormalizeEmail(request.Identity)
            ?? throw new InvalidOperationException(
                "Identity normalization failed.");


        // Check identity type
        bool isEmployeeNumber =
            IdentityClassifiers.IsEmployeeNumber(normalizedName);

        bool isEmail =
            IdentityClassifiers.IsEmail(normalizedEmail);


        // Assign identity type
        if (isEmployeeNumber)
        {
            return query.Where(u =>
                u.Employee != null &&
                u.Employee.Number == normalizedName);
        }

        if (isEmail)
        {
            return query.Where(u =>
                u.NormalizedEmail == normalizedEmail);
        }

        return query.Where(u =>
            u.NormalizedUserName == normalizedName);
    }
}
