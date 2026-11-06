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
    private readonly IUserContext _userContext;

    public TokenIssuer(
        IJwtProvider jwtProvider,
        IRefreshTokenProvider refreshTokenProvider,
        IOptions<JwtOptions> jwtOptions,
        IDateTimeService dateTimeService,
        IUserContext userContext)
    {
        _jwtProvider = jwtProvider;
        _refreshTokenProvider = refreshTokenProvider;
        _jwtOptions = jwtOptions.Value;
        _dateTimeService = dateTimeService;
        _userContext = userContext;
    }

    public (string token, DateTimeOffset expiration) IssueAccessToken(
        ApplicationUser user,
        Guid sessionId)
    {
        var token = _jwtProvider.GenerateAccessToken(
            user,
            sessionId);

        var expiration = _dateTimeService.UtcNow
            .Add(_jwtOptions.AccessTokenLifetime);

        return (token, expiration);
    }

    public (string token, DateTimeOffset expiration) IssueRefreshToken(
        DateTimeOffset sessionExpiresAt)
    {
        var token = _refreshTokenProvider.GenerateRefreshToken();

        return (token, sessionExpiresAt);
    }

    public TokenResult IssueTokenObject(
        ApplicationUser user,
        Guid userSessionId,
        DateTimeOffset refreshTokenExpiresAt)
    {
        var (accessToken, accessTokenExpiresAt) = IssueAccessToken(user, userSessionId);
        var (refreshToken, refreshTokenExpiration) =
            IssueRefreshToken(refreshTokenExpiresAt);

        return new TokenResult(
            accessToken,
            refreshToken,
            accessTokenExpiresAt,
            refreshTokenExpiration);
    }

    public ApplicationRefreshToken CreateRefreshTokenObject(
        ApplicationUser user,
        Guid userSessionId,
        TokenResult tokenResult)
    {
        return new ApplicationRefreshToken
        {
            Id = Guid.NewGuid(),
            Token = tokenResult.RefreshToken,
            UserId = user.Id,
            UserSessionId = userSessionId,
            UserAgent = _userContext.UserAgent,
            CreatedByIp = _userContext.IpAddress,
            CreatedAt = _dateTimeService.UtcNow,
            ExpiresAt = tokenResult.RefreshTokenExpiresAt,
        };
    }
}
