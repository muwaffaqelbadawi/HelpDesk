namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class JwtOptions
{
    public string Key { get; init; } = null!;

    public string Issuer { get; init; } = null!;

    public string Audience { get; init; } = null!;

    public int AccessTokenExpiryMinutes { get; init; }

    public TimeSpan AccessTokenLifetime =>
        TimeSpan.FromMinutes(AccessTokenExpiryMinutes);

    public int RefreshTokenExpiryDays { get; init; }

    public TimeSpan RefreshTokenLifetime =>
        TimeSpan.FromDays(RefreshTokenExpiryDays);
}
