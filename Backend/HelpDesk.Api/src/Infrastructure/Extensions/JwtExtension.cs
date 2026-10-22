using System.IdentityModel.Tokens.Jwt;
using System.Text;
using HelpDesk.src.Infrastructure.Extensions;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Shared.DataAccess.Readers;
using HelpDesk.src.Shared.DataAccess.Repositories;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
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

        // Register the ClaimProvider as a scoped service
        builder.Services.AddScoped<IClaimProvider, ClaimProvider>();

        // Register the JwtProvider as a scoped service
        builder.Services.AddScoped<IJwtProvider, JwtProvider>();

        // Register the TokenIssuer as a scoped service
        builder.Services.AddScoped<ITokenIssuer, TokenIssuer>();

        // Register the RefreshTokenProvider as a scoped service
        builder.Services.AddScoped<IRefreshTokenProvider, RefreshTokenProvider>();

        // Register the TokenService as a scoped service
        builder.Services.AddScoped<ITokenService, TokenService>();

        // Register the JwtRevocationStore as a scoped service
        builder.Services.AddScoped<IJwtRevocationStore, JwtRevocationStore>();

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

                    OnTokenValidated = async context =>
                    {
                        var userContext = context.HttpContext
                            .RequestServices
                            .GetRequiredService<IUserContext>();

                        var jti = context.Principal?
                            .FindFirst(JwtRegisteredClaimNames.Jti)?
                            .Value;

                        if (!Guid.TryParse(jti, out var jwtId))
                        {
                            context.Fail("JWT is missing a valid jti claim.");
                            return;
                        }

                        var revocationStore = context.HttpContext
                            .RequestServices
                            .GetRequiredService<IJwtRevocationStore>();

                        if (await revocationStore.IsRevokedAsync(
                            jwtId,
                            context.HttpContext.RequestAborted))
                        {
                            context.Fail("JWT has been revoked.");
                        }
                    },

                    OnChallenge = async context =>
                    {
                        context.HandleResponse();

                        context.Response.StatusCode =
                            StatusCodes.Status401Unauthorized;

                        context.Response.Headers.WWWAuthenticate = "Bearer";

                        var apiContext = context.HttpContext
                            .RequestServices
                            .GetRequiredService<IApiContext>();

                        var userContext = context.HttpContext
                            .RequestServices
                            .GetRequiredService<IUserContext>();

                        await context.Response.WriteAsJsonAsync(
                            new ProblemDetails
                            {
                                Type = $"{apiContext.BaseUrl}/errors/authentication",
                                Title = nameof(context.AuthenticateFailure),
                                Status = context.Response.StatusCode,
                                Detail = ApiMessages.AuthenticationRequired,
                                Instance = context.Request.Path,
                                Extensions =
                                {
                                    ["traceId"] = userContext.TraceId,
                                    ["correlationId"] = userContext.CorrelationId
                                }
                            }
                        );
                    }
                };
            });

        return builder;
    }

    public static WebApplicationBuilder AddAuthorizationServices(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddAuthorization();

        return builder;
    }

    public static WebApplicationBuilder AddJwt(
        this WebApplicationBuilder builder)
    {
        builder
            .AddJwtConfigs()
            .AddJwtServices()
            .AddJwtOptions()
            .AddAuthorizationServices();

        return builder;
    }
}
