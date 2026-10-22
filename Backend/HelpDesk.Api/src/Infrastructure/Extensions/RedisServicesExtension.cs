namespace HelpDesk.src.Infrastructure.Extensions;

public static class RedisServicesExtension
{
    public static WebApplicationBuilder AddRedis(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration =
                builder.Configuration.GetConnectionString("Redis")
                ?? throw new InvalidOperationException(
                    "The Redis connection string is not configured.");
        });

        return builder;
    }
}
