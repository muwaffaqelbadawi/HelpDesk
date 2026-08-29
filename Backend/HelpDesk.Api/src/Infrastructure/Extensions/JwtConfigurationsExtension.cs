using System.Text;
using HelpDesk.src.Infrastructure.Extensions;
using HelpDesk.src.Infrastructure.Services.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class JwtConfigurationsExtension
{
    public static IServiceCollection AddJwtConfigurations(
        this IServiceCollection services,
        WebApplicationBuilder builder)
    {
        // Register JwtOptions in DI - this makes it globally injectable
        builder.Services.Configure<JwtOptions>(
            builder.Configuration.GetSection("Jwt"));

        // Local binding for immediate use in this method
        var jwtOptions = builder.Configuration
            .GetSection("Jwt")
            .Get<JwtOptions>()
            ?? throw new InvalidOperationException("JWT configuration section is missing or invalid.");

        services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,

                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtOptions.Issuer,
                    ValidAudience = jwtOptions.Audience,

                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(jwtOptions.Key)),

                    ClockSkew = TimeSpan.Zero
                };
            });

        // AddAuthorization
        builder.Services.AddAuthorization();

        return services;
    }
}
