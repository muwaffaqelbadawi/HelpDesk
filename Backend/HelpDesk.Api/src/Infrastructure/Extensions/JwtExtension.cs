using System.Text;
using HelpDesk.src.Infrastructure.Extensions;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Readers;
using HelpDesk.src.Shared.DataAccess.Repositories;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class JwtExtension
{
    public static WebApplicationBuilder AddJwtConfigs(
       this WebApplicationBuilder builder)
    {
        var jwtSection = builder.Configuration.GetSection("Jwt");

        builder.Services
            .AddOptions<JwtOptions>()
            .Bind(jwtSection)
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddJwtServices(
        this WebApplicationBuilder builder)
    {
        // Register RefreshTokenRepository as scoped
        builder.Services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();

        // Register RefreshTokenReader as scoped
        builder.Services.AddScoped<IRefreshTokenReader, RefreshTokenReader>();

        return builder;
    }

    public static WebApplicationBuilder AddJwtOptions(
        this WebApplicationBuilder builder)
    {
        var jwtSection = builder.Configuration.GetSection("Jwt");

        var jwtOptions = jwtSection.Get<JwtOptions>()
            ?? throw new InvalidOperationException(
                "JWT options are not configured." +
                "Expected configuration section 'Jwt'.");

        builder.Services
            .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
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

                options.Events = new JwtBearerEvents
                {
                    OnMessageReceived = context =>
                    {
                        context.Token = context.Request.Cookies["access_token"];

                        return Task.CompletedTask;
                    },
                };
            });

        builder.Services.AddAuthorization();

        return builder;
    }

    public static WebApplicationBuilder AddJwt(
        this WebApplicationBuilder builder)
    {
        builder
            .AddJwtConfigs()
            .AddJwtServices()
            .AddJwtOptions();

        return builder;
    }
}
