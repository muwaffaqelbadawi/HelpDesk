using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Caching.Distributed;

namespace HelpDesk.src.Infrastructure.Services.Jwt;

public sealed class JwtRevocationStore : IJwtRevocationStore
{
    private const string KeyPrefix = "helpdesk:security:revoked-jwt:";

    private readonly IDistributedCache _cache;
    private readonly IDateTimeService _dateTimeService;

    public JwtRevocationStore(
        IDistributedCache cache,
        IDateTimeService timeProvider)
    {
        _cache = cache;
        _dateTimeService = timeProvider;
    }

    public async Task<bool> IsRevokedAsync(
        Guid jti,
        CancellationToken cancellationToken)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(jti.ToString());

        var value = await _cache.GetAsync(
            GetKey(jti),
            cancellationToken);

        return value is not null;
    }

    public async Task RevokeAsync(
        Guid jti,
        DateTimeOffset expiresAt,
        CancellationToken cancellationToken)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(jti.ToString());

        var remainingLifetime = expiresAt - _dateTimeService.UtcNow;

        // An expired JWT does not need a revocation entry.
        if (remainingLifetime <= TimeSpan.Zero)
        {
            return;
        }

        await _cache.SetAsync(
            GetKey(jti),
            [1],
            new DistributedCacheEntryOptions
            {
                AbsoluteExpiration = expiresAt
            },
            cancellationToken);
    }

    private static string GetKey(Guid jti) =>
        $"{KeyPrefix}{jti}";
}
