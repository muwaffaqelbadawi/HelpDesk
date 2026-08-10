using Microsoft.Extensions.Options;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

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

    public async Task<TokenResult> IssueAsync(
        ApplicationUser user,
        CancellationToken cancellationToken = default)
    {
        // Generate access token
        var accessToken = await _jwtProvider.GenerateAccessToken(
            user,
            cancellationToken);

        // Generate refresh token
        var refreshToken = _refreshTokenProvider.GenerateRefreshToken();

        // now
        var now = _dateTimeService.UtcNow;
        var accessTokenExpiresAt = now.Add(_jwtOptions.AccessTokenLifetime);
        var refreshTokenExpiresAt = now.Add(_jwtOptions.RefreshTokenLifetime);

        return new TokenResult(
            AccessToken: accessToken,
            RefreshToken: refreshToken,
            AccessTokenExpiresAt: accessTokenExpiresAt,
            RefreshTokenExpiresAt: refreshTokenExpiresAt);
    }
}
