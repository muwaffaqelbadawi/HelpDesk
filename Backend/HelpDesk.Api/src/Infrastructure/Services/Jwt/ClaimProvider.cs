using System.IdentityModel.Tokens.Jwt;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

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
