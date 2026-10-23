using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using HelpDesk.src.Infrastructure.Extensions;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using HelpDesk.Tests.Integration.Fixtures;
using HelpDesk.Tests.Integration.TestData;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Xunit;

namespace HelpDesk.Tests.Integration.Features.Auth;

public sealed class JwtBearerRevocationTests
{
    private const string Issuer = "HelpDesk.JwtBearer.Tests";
    private const string Audience = "HelpDesk.JwtBearer.Tests";
    private const string SigningKey = "test-only-signing-key-32-bytes-long";

    [Fact]
    public async Task Should_authenticate_a_valid_non_revoked_token_and_check_its_jti()
    {
        var jti = Guid.NewGuid();
        var store = new RecordingRevocationStore();
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();

        using var response = await SendAsync(
            client,
            CreateBearerToken(jti.ToString()));

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        Assert.Equal([jti], store.LookedUpJtis);
    }

    [Fact]
    public async Task Should_challenge_a_revoked_token_with_the_authentication_problem_details()
    {
        var jti = Guid.NewGuid();
        var store = new RecordingRevocationStore { IsRevoked = true };
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();

        using var response = await SendAsync(
            client,
            CreateBearerToken(jti.ToString()));

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        Assert.Equal([jti], store.LookedUpJtis);
        await AssertAuthenticationProblemDetailsAsync(response);
    }

    [Fact]
    public async Task Should_reject_missing_or_malformed_jti_without_querying_the_store()
    {
        var store = new RecordingRevocationStore();
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();

        foreach (var token in new[]
        {
            CreateBearerToken(jti: null),
            CreateBearerToken("not-a-guid")
        })
        {
            using var response = await SendAsync(client, token);

            Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
            await AssertAuthenticationProblemDetailsAsync(response);
        }

        Assert.Empty(store.LookedUpJtis);
    }

    [Fact]
    public async Task Should_reject_expired_tokens_before_revocation_lookup()
    {
        var store = new RecordingRevocationStore();
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();

        using var response = await SendAsync(
            client,
            CreateBearerToken(
                Guid.NewGuid().ToString(),
                expiresAt: DateTime.UtcNow.AddMinutes(-5)));

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        Assert.Empty(store.LookedUpJtis);
        await AssertAuthenticationProblemDetailsAsync(response);
    }

    [Fact]
    public async Task Should_reject_tokens_signed_with_an_invalid_key()
    {
        var store = new RecordingRevocationStore();
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();

        using var response = await SendAsync(
            client,
            CreateBearerToken(
                Guid.NewGuid().ToString(),
                signingKey: "different-test-signing-key-32-bytes"));

        Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        Assert.Empty(store.LookedUpJtis);
        await AssertAuthenticationProblemDetailsAsync(response);
    }

    [Fact]
    public async Task Should_fail_closed_when_the_revocation_store_is_unavailable()
    {
        var jti = Guid.NewGuid();
        var store = new RecordingRevocationStore
        {
            Failure = new InvalidOperationException("Test revocation store failure.")
        };
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();

        using var response = await SendAsync(
            client,
            CreateBearerToken(jti.ToString()));

        Assert.Equal(HttpStatusCode.InternalServerError, response.StatusCode);
        Assert.Equal([jti], store.LookedUpJtis);
        using var document = System.Text.Json.JsonDocument.Parse(
            await response.Content.ReadAsStringAsync(
                TestContext.Current.CancellationToken));
        Assert.Equal(
            "https://localhost:7082/test/errors/internal-server-error",
            document.RootElement.GetProperty("type").GetString());
        Assert.Equal(
            "Test revocation store failure.",
            document.RootElement.GetProperty("detail").GetString());
    }

    //[Fact]
    //public async Task Should_reject_a_revoked_token_through_the_real_redis_backed_pipeline()
    //{
    //    var connectionString =
    //        RedisJwtRevocationStoreTests.GetRedisConnectionString();
    //    var now = DateTimeOffset.UtcNow;
    //    var jti = Guid.NewGuid();
    //    await using var app = await CreateAppAsync(
    //        revocationStore: null,
    //        redisConnectionString: connectionString,
    //        now: now);
    //    await using (var scope = app.Services.CreateAsyncScope())
    //    {
    //        var store = scope.ServiceProvider
    //            .GetRequiredService<IJwtRevocationStore>();
    //        await store.RevokeAsync(
    //            jti,
    //            now.AddMinutes(10),
    //            TestContext.Current.CancellationToken);
    //    }

    //    using var client = app.GetTestClient();
    //    using var response = await SendAsync(
    //        client,
    //        CreateBearerToken(jti.ToString()));

    //    Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
    //    await AssertAuthenticationProblemDetailsAsync(response);
    //}

    [Fact]
    public async Task Should_continue_to_accept_tokens_from_the_access_token_cookie()
    {
        var jti = Guid.NewGuid();
        var store = new RecordingRevocationStore();
        await using var app = await CreateAppAsync(store);
        using var client = app.GetTestClient();
        using var request = new HttpRequestMessage(HttpMethod.Get, "/protected");
        request.Headers.Add(
            "Cookie",
            $"access_token={CreateBearerToken(jti.ToString())}");

        using var response = await client.SendAsync(
            request,
            TestContext.Current.CancellationToken);

        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        Assert.Equal([jti], store.LookedUpJtis);
    }

    private static async Task<WebApplication> CreateAppAsync(
        IJwtRevocationStore? revocationStore,
        string? redisConnectionString = null,
        DateTimeOffset? now = null)
    {
        var builder = WebApplication.CreateBuilder(new WebApplicationOptions
        {
            EnvironmentName = "Testing"
        });
        builder.WebHost.UseTestServer();
        builder.Configuration.AddInMemoryCollection(
            new Dictionary<string, string?>
            {
                ["Jwt:Key"] = SigningKey,
                ["Jwt:Issuer"] = Issuer,
                ["Jwt:Audience"] = Audience
            });
        if (redisConnectionString is not null)
        {
            builder.Configuration.AddInMemoryCollection(
                new Dictionary<string, string?>
                {
                    ["ConnectionStrings:Redis"] = redisConnectionString
                });
            builder.AddRedis();
            builder.Services.AddSingleton<IDateTimeService>(
                new FixedDateTimeService(
                    now ?? throw new ArgumentNullException(nameof(now))));
            builder.Services.AddScoped<IJwtRevocationStore, JwtRevocationStore>();
        }
        else
        {
            builder.Services.AddSingleton(
                revocationStore
                    ?? throw new ArgumentNullException(nameof(revocationStore)));
        }

        builder.AddJwtOptions();
        builder.Services.AddAuthorization();
        builder.Services.AddSingleton<IUserContext, UserContextTestData>();
        builder.Services.AddSingleton<IApiContext, ApiContextTestData>();

        var app = builder.Build();
        app.UseExceptionHandling();
        app.UseAuthentication();
        app.UseAuthorization();
        app.MapGet("/protected", () => Results.Ok()).RequireAuthorization();
        await app.StartAsync(TestContext.Current.CancellationToken);

        return app;
    }

    private static HttpRequestMessage CreateRequest(string token)
    {
        var request = new HttpRequestMessage(HttpMethod.Get, "/protected");
        request.Headers.Authorization =
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
        return request;
    }

    private static async Task<HttpResponseMessage> SendAsync(
        HttpClient client,
        string token)
    {
        using var request = CreateRequest(token);
        return await client.SendAsync(
            request,
            TestContext.Current.CancellationToken);
    }

    private static string CreateBearerToken(
        string? jti,
        DateTime? expiresAt = null,
        string signingKey = SigningKey)
    {
        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sub, Guid.NewGuid().ToString()),
            new(JwtRegisteredClaimNames.Name, "jwt-bearer-test"),
            new(JwtRegisteredClaimNames.UniqueName, "jwt-bearer-test"),
            new(JwtRegisteredClaimNames.Sid, Guid.NewGuid().ToString()),
            new(
                JwtRegisteredClaimNames.Iat,
                DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(),
                ClaimValueTypes.Integer64)
        };

        if (jti is not null)
        {
            claims.Add(new Claim(JwtRegisteredClaimNames.Jti, jti));
        }

        var credentials = new SigningCredentials(
            new SymmetricSecurityKey(Encoding.UTF8.GetBytes(signingKey)),
            SecurityAlgorithms.HmacSha256Signature);
        var token = new JwtSecurityToken(
            Issuer,
            Audience,
            claims,
            DateTime.UtcNow.AddMinutes(-10),
            expiresAt ?? DateTime.UtcNow.AddMinutes(5),
            credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    private static async Task AssertAuthenticationProblemDetailsAsync(
        HttpResponseMessage response)
    {
        using var document = System.Text.Json.JsonDocument.Parse(
            await response.Content.ReadAsStringAsync(
                TestContext.Current.CancellationToken));

        Assert.Equal(
            "https://localhost:7082/test/errors/authentication",
            document.RootElement.GetProperty("type").GetString());
        Assert.Equal(
            ApiMessages.AuthenticationRequired,
            document.RootElement.GetProperty("detail").GetString());
        Assert.Equal(
            (int)HttpStatusCode.Unauthorized,
            document.RootElement.GetProperty("status").GetInt32());
    }

    private sealed class RecordingRevocationStore : IJwtRevocationStore
    {
        public List<Guid> LookedUpJtis { get; } = [];
        public bool IsRevoked { get; init; }
        public Exception? Failure { get; init; }

        public Task RevokeAsync(
            Guid jti,
            DateTimeOffset expiresAt,
            CancellationToken cancellationToken) =>
            Task.CompletedTask;

        public Task<bool> IsRevokedAsync(
            Guid jti,
            CancellationToken cancellationToken)
        {
            LookedUpJtis.Add(jti);

            return Failure is null
                ? Task.FromResult(IsRevoked)
                : Task.FromException<bool>(Failure);
        }
    }
}
