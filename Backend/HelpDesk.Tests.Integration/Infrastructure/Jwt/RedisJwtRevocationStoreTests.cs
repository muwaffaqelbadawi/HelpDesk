namespace HelpDesk.Tests.Integration.Infrastructure.Jwt;

public sealed class RedisJwtRevocationStoreTests
{
    //private static readonly Guid PersistentTestJti =
    //    Guid.Parse("00000000-0000-0000-0000-000000000001");

    //[Fact]
    //public async Task Should_persist_revocation_in_the_configured_redis_instance()
    //{
    //    var connectionString = GetRedisConnectionString();
    //    using var multiplexer = await ConnectionMultiplexer.ConnectAsync(connectionString);
    //    using var provider = CreateCacheProvider(connectionString);

    //    var now = DateTimeOffset.UtcNow;
    //    var expiresAt = now.AddHours(12);
    //    var store = new JwtRevocationStore(
    //        provider.GetRequiredService<IDistributedCache>(),
    //        new FixedDateTimeService(now));

    //    await store.RevokeAsync(
    //        PersistentTestJti,
    //        expiresAt,
    //        CancellationToken.None);

    //    Assert.True(
    //        await store.IsRevokedAsync(
    //            PersistentTestJti,
    //            CancellationToken.None));

    //    var database = multiplexer.GetDatabase();
    //    var redisKey = $"helpdesk:security:revoked-jwt:{PersistentTestJti}";
    //    var ttl = await database.KeyTimeToLiveAsync(redisKey);

    //    Assert.NotNull(ttl);
    //    Assert.InRange(ttl!.Value, TimeSpan.FromHours(11), TimeSpan.FromHours(12));
    //}

    //[Fact]
    //public async Task Should_read_a_revocation_record_restored_from_redis()
    //{
    //    var connectionString = GetRedisConnectionString(
    //        expectPersistedRecord: true);
    //    using var multiplexer = await ConnectionMultiplexer.ConnectAsync(connectionString);
    //    using var provider = CreateCacheProvider(connectionString);
    //    var store = new JwtRevocationStore(
    //        provider.GetRequiredService<IDistributedCache>(),
    //        new FixedDateTimeService(DateTimeOffset.UtcNow));

    //    Assert.True(
    //        await store.IsRevokedAsync(
    //            PersistentTestJti,
    //            CancellationToken.None));

    //    var database = multiplexer.GetDatabase();
    //    var redisKey = $"helpdesk:security:revoked-jwt:{PersistentTestJti}";
    //    var ttl = await database.KeyTimeToLiveAsync(redisKey);

    //    Assert.NotNull(ttl);
    //    Assert.InRange(ttl!.Value, TimeSpan.FromHours(10), TimeSpan.FromHours(12));
    //}

    //internal static string GetRedisConnectionString(
    //    bool expectPersistedRecord = false)
    //{
    //    var connectionString =
    //        Environment.GetEnvironmentVariable("HELPDESK_TEST_REDIS");
    //    if (string.IsNullOrWhiteSpace(connectionString))
    //    {
    //        Assert.Skip(
    //            "Set HELPDESK_TEST_REDIS to an isolated test Redis endpoint to run this test.");
    //    }

    //    if (!string.Equals(
    //            Environment.GetEnvironmentVariable("HELPDESK_TEST_REDIS_ALLOW_WRITE"),
    //            "true",
    //            StringComparison.OrdinalIgnoreCase))
    //    {
    //        Assert.Skip(
    //            "Set HELPDESK_TEST_REDIS_ALLOW_WRITE=true to confirm this endpoint is disposable.");
    //    }

    //    if (expectPersistedRecord
    //        && !string.Equals(
    //            Environment.GetEnvironmentVariable("HELPDESK_TEST_REDIS_EXPECT_PERSISTED"),
    //            "true",
    //            StringComparison.OrdinalIgnoreCase))
    //    {
    //        Assert.Skip(
    //            "Set HELPDESK_TEST_REDIS_EXPECT_PERSISTED=true after seeding the record or recovering its volume.");
    //    }

    //    return connectionString;
    //}

    //private static ServiceProvider CreateCacheProvider(string connectionString)
    //{
    //    var services = new ServiceCollection();
    //    services.AddStackExchangeRedisCache(options =>
    //    {
    //        options.Configuration = connectionString;
    //    });

    //    return services.BuildServiceProvider();
    //}
}
