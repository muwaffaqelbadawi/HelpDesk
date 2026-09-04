using System.Text;
using HelpDesk.src.Infrastructure.Extensions;
using HelpDesk.src.Infrastructure.Services.Jwt;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class JwtExtension
{
    public static WebApplicationBuilder AddJwtConfigs(
       this WebApplicationBuilder builder)
    {
        builder.Services
            .AddOptions<JwtOptions>()
            .Bind(builder.Configuration.GetSection("Jwt"))
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddJwtOptions(
        this WebApplicationBuilder builder)
    {
        builder.AddJwtConfigs();

        var jwtSection = builder.Configuration.GetSection("jwt");

        var jwtOptions = jwtSection.Get<JwtOptions>()
            ?? throw new InvalidOperationException("JWT options are not configured. Expected configuration section 'Jwt'.");

        builder.Services
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

        // AddAuthorization services
        builder.Services.AddAuthorization();

        return builder;
    }
}
