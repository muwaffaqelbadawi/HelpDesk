namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed record TokenResult(
    string AccessToken,
    string RefreshToken,
    DateTimeOffset AccessTokenExpiresAt,
    DateTimeOffset RefreshTokenExpiresAt);
