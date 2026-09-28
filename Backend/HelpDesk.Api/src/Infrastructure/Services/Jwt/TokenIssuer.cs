using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class TokenIssuer : ITokenIssuer
{
    private readonly IJwtProvider _jwtProvider;
    private readonly IRefreshTokenProvider _refreshTokenProvider;
    private readonly JwtOptions _jwtOptions;
    private readonly IDateTimeService _dateTimeService;

    public TokenIssuer(
        IJwtProvider jwtProvider,
        IRefreshTokenProvider refreshTokenProvider,
        IOptions<JwtOptions> jwtOptions,
        IDateTimeService dateTimeService)
    {
        _jwtProvider = jwtProvider;
        _refreshTokenProvider = refreshTokenProvider;
        _jwtOptions = jwtOptions.Value;
        _dateTimeService = dateTimeService;
    }

    public TokenResult Issue(ApplicationUser user)
    {
        // Generate access token
        var accessToken = _jwtProvider.GenerateAccessToken(user);

        // Generate refresh token
        var refreshToken = _refreshTokenProvider.GenerateRefreshToken();

        // now
        var now = _dateTimeService.UtcNow;

        // access token expiration
        var accessTokenExpiresAt = now.Add(_jwtOptions.AccessTokenLifetime);

        // refresh token expiration
        var refreshTokenExpiresAt = now.Add(_jwtOptions.RefreshTokenLifetime);

        return new TokenResult(
            AccessToken: accessToken,
            RefreshToken: refreshToken,
            AccessTokenExpiresAt: accessTokenExpiresAt,
            RefreshTokenExpiresAt: refreshTokenExpiresAt);
    }
}
