using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using Xunit;

namespace HelpDesk.Tests.Unit.Infrastructure.Services;

public sealed class JwtRevocationStoreTests
{
    [Fact]
    public async Task Should_write_and_read_revocation_from_distributed_cache()
    {
        // now
        var now = DateTimeOffset.UtcNow;

        var services = new ServiceCollection();

        services.AddDistributedMemoryCache();

        using var provider = services.BuildServiceProvider();

        var store = new JwtRevocationStore(
            provider.GetRequiredService<IDistributedCache>(),
            CreateDateTimeService(now));

        var jti = Guid.NewGuid();

        await store.RevokeAsync(
            jti,
            now.AddMinutes(15),
            CancellationToken.None);

        Assert.True(await store.IsRevokedAsync(jti, CancellationToken.None));
        Assert.False(await store.IsRevokedAsync(Guid.NewGuid(), CancellationToken.None));
    }

    [Fact]
    public async Task Should_use_expected_key_and_jwt_expiration()
    {
        var cache = new Mock<IDistributedCache>();
        var now = DateTimeOffset.UtcNow;
        var expiresAt = now.AddMinutes(15);
        var jti = Guid.NewGuid();
        var cancellationToken = CancellationToken.None;

        cache
            .Setup(x => x.SetAsync(
                $"helpdesk:security:revoked-jwt:{jti}",
                It.IsAny<byte[]>(),
                It.Is<DistributedCacheEntryOptions>(
                    options => options.AbsoluteExpiration == expiresAt),
                cancellationToken))
            .Returns(Task.CompletedTask);

        var store = new JwtRevocationStore(
            cache.Object,
            CreateDateTimeService(now));

        await store.RevokeAsync(jti, expiresAt, cancellationToken);

        cache.Verify(
            x => x.SetAsync(
                $"helpdesk:security:revoked-jwt:{jti}",
                It.IsAny<byte[]>(),
                It.Is<DistributedCacheEntryOptions>(
                    options => options.AbsoluteExpiration == expiresAt),
                cancellationToken),
            Times.Once);
    }

    [Fact]
    public async Task Should_not_write_a_revocation_for_an_expired_token()
    {
        var cache = new Mock<IDistributedCache>();
        var now = DateTimeOffset.UtcNow;
        var store = new JwtRevocationStore(
            cache.Object,
            CreateDateTimeService(now));

        await store.RevokeAsync(
            Guid.NewGuid(),
            now.AddTicks(-1),
            CancellationToken.None);

        cache.Verify(
            x => x.SetAsync(
                It.IsAny<string>(),
                It.IsAny<byte[]>(),
                It.IsAny<DistributedCacheEntryOptions>(),
                It.IsAny<CancellationToken>()),
            Times.Never);
    }

    [Fact]
    public async Task Should_propagate_cache_cancellation()
    {
        using var cancellationSource = new CancellationTokenSource();
        await cancellationSource.CancelAsync();
        var cache = new Mock<IDistributedCache>();
        cache
            .Setup(x => x.GetAsync(
                It.IsAny<string>(),
                cancellationSource.Token))
            .Returns(Task.FromCanceled<byte[]?>(cancellationSource.Token));

        var store = new JwtRevocationStore(
            cache.Object,
            CreateDateTimeService(DateTimeOffset.UtcNow));

        await Assert.ThrowsAnyAsync<OperationCanceledException>(
            () => store.IsRevokedAsync(Guid.NewGuid(), cancellationSource.Token));
    }

    [Fact]
    public async Task Should_propagate_cache_failures()
    {
        var expectedException = new InvalidOperationException("Cache unavailable.");

        var cache = new Mock<IDistributedCache>();

        cache
            .Setup(x => x.GetAsync(
                It.IsAny<string>(),
                It.IsAny<CancellationToken>()))
            .ThrowsAsync(expectedException);

        var store = new JwtRevocationStore(
            cache.Object,
            CreateDateTimeService(DateTimeOffset.UtcNow));

        var exception = await Assert.ThrowsAsync<InvalidOperationException>(
            () => store.IsRevokedAsync(Guid.NewGuid(), CancellationToken.None));

        Assert.Same(expectedException, exception);
    }

    private static IDateTimeService CreateDateTimeService(DateTimeOffset now)
    {
        var dateTimeService = new Mock<IDateTimeService>();

        dateTimeService
            .Setup(x => x.UtcNow)
            .Returns(now);

        return dateTimeService.Object;
    }
}
