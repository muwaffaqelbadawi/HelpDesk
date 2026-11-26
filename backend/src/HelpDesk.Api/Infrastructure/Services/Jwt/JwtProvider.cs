using System.IdentityModel.Tokens.Jwt;
using System.Text;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace HelpDesk.Infrastructure.Services.Jwt;

public sealed class JwtProvider(
    IOptions<JwtOptions> jwtOptions,
    IDateTimeService dateTimeService,
    IClaimProvider claimsProvider) : IJwtProvider
{
    public string GenerateAccessToken(
        ApplicationUser user,
        Guid sessionId)
    {
        var key = Encoding.UTF8.GetBytes(jwtOptions.Value.Key);

        var signingCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature);

        var claims = claimsProvider.GetClaims(
            user,
            sessionId);

        var now = dateTimeService.UtcNowDateTime;

        var accessTokenExpiresAt = now.Add(jwtOptions.Value.AccessTokenLifetime);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Issuer = jwtOptions.Value.Issuer,
            Audience = jwtOptions.Value.Audience,
            Claims = claims,
            Expires = accessTokenExpiresAt,
            SigningCredentials = signingCredentials
        };

        var tokenHandler = new JwtSecurityTokenHandler();

        var securityToken = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(securityToken);
    }
}
