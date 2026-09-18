using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AuthServicesExtension
{
    public static IServiceCollection AddAuthServices(
        this IServiceCollection services)
    {
        services.Configure<DataProtectionTokenProviderOptions>(options =>
            options.TokenLifespan = TimeSpan.FromHours(24));

        return services;
    }
}
