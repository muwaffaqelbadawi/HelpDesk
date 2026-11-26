using System.IdentityModel.Tokens.Jwt;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Exceptions;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.Jwt;

public sealed class ClaimProvider(IDateTimeService dateTimeService) : IClaimProvider
{
    public IDictionary<string, object> GetClaims(
        ApplicationUser user,
        Guid sessionId)
    {
        var userName =
            user.UserName
            ?? user.Email
            ?? user.Employee?.Number;

        return string.IsNullOrWhiteSpace(userName)
            ? throw new ValidationException(
                errors: new()
                {
                    ["userName"] = ["Null or invalid userName."]
                })
            : (IDictionary<string, object>)new Dictionary<string, object>
            {
                [JwtRegisteredClaimNames.Sub] = user.Id,

                [JwtRegisteredClaimNames.Name] = userName,

                [JwtRegisteredClaimNames.UniqueName] = userName,

                [JwtRegisteredClaimNames.Sid] = sessionId,

                [JwtRegisteredClaimNames.Jti] = Guid.NewGuid(),

                [JwtRegisteredClaimNames.Iat] = dateTimeService.UtcNow.ToUnixTimeSeconds(),
            };
    }
}
