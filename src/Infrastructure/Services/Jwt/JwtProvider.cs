using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class JwtProvider : IJwtProvider
{
    private readonly JwtOptions _jwtOptions;
    private readonly IDateTimeService _dateTimeService;
    private readonly IClaimProvider _claimsProvider;

    public JwtProvider(
        IOptions<JwtOptions> jwtOptions,
        IDateTimeService dateTimeService,
        IClaimProvider claimsProvider)
    {
        _jwtOptions = jwtOptions.Value;
        _dateTimeService = dateTimeService;
        _claimsProvider = claimsProvider;
    }

    public async Task<string> GenerateAccessToken(
        ApplicationUser user,

        CancellationToken cancellationToken = default)
    {
        var key = Encoding.UTF8.GetBytes(_jwtOptions.Key);

        var signingCredentials = new SigningCredentials(
            new SymmetricSecurityKey(key),
            SecurityAlgorithms.HmacSha256Signature);

        // Payload (sub, name, unique_name, Jti, Iat, roles, email, employee_number)
        var claims = await _claimsProvider.GetClaimsAsync(
            user,
            cancellationToken);

        // now
        var now = _dateTimeService.UtcNowDateTime;
        var accessTokenExpiresAt = now.Add(_jwtOptions.AccessTokenLifetime);

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Issuer = _jwtOptions.Issuer,
            Audience = _jwtOptions.Audience,
            Claims = claims,
            Expires = accessTokenExpiresAt,
            SigningCredentials = signingCredentials
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var securityToken = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(securityToken);
    }
}
