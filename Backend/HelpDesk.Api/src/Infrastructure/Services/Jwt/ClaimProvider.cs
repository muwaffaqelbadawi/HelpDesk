using System.IdentityModel.Tokens.Jwt;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class ClaimProvider : IClaimProvider
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly IDateTimeService _dateTimeService;

    public ClaimProvider(
        UserManager<ApplicationUser> userManager,
        IDateTimeService dateTimeService)
    {
        _userManager = userManager;
        _dateTimeService = dateTimeService;
    }

    public async Task<IDictionary<string, object>> GetClaimsAsync(
        ApplicationUser user,
        CancellationToken cancellationToken = default)
    {
        string identity =
            user.UserName
            ?? user.Email
            ?? user.Employee?.Number
            ?? user.Id.ToString();

        IList<string> roles = await _userManager.GetRolesAsync(user);

        var claims = new Dictionary<string, object>
        {
            // sub -> ClaimTypes.NameIdentifier
            [JwtRegisteredClaimNames.Sub] = user.Id.ToString(),

            // name
            [JwtRegisteredClaimNames.Name] = identity,

            // unique_name -> ClaimTypes.Name
            [JwtRegisteredClaimNames.UniqueName] = identity,

            // JWT ID
            [JwtRegisteredClaimNames.Jti] = Guid.NewGuid().ToString(),

            // Issued At
            [JwtRegisteredClaimNames.Iat] = _dateTimeService.UtcNow.ToUnixTimeSeconds(),

            // roles -> ClaimTypes.Role
            ["roles"] = roles
        };

        if (!string.IsNullOrWhiteSpace(user.Email))
        {
            // email -> ClaimTypes.Email
            claims[JwtRegisteredClaimNames.Email] = user.Email;
        }

        if (!string.IsNullOrWhiteSpace(user.Employee?.Number))
        {
            // employee_number
            claims["employee_number"] = user.Employee.Number;
        }

        return claims;
    }
}
