using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Infrastructure.Services.Security;
using HelpDesk.src.Infrastructure.Services.UserProviders;
using HelpDesk.src.Shared.IdentityBuilders;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AuthenticationServicesExtension
{
    public static WebApplicationBuilder AddAuthentication(
        this WebApplicationBuilder builder)
    {
        //Identity Middleware
        builder.Services.AddIdentityConfiguration();

        // Register HttpContextAccessor to access the current HTTP context in builder.Services
        builder.Services.AddHttpContextAccessor();

        // UserContext
        // Register the UserContext as a scoped service
        builder.Services.AddScoped<IUserContext, UserContext>();

        // UserProvider
        // Register the CurrentUserProvider as a scoped service
        builder.Services.AddScoped<IUserProvider, UserProvider>();

        // Register the UserIdentityFilter as a scoped service
        builder.Services.AddScoped<IdentityFilters>();

        // Register the UserIdentityResolver as a scoped service
        builder.Services.AddScoped<IdentityResolvers>();

        // Register the PasswordHasher as a scoped service
        builder.Services.AddScoped<IPasswordHasher<ApplicationUser>, PasswordHasher<ApplicationUser>>();

        // Register the TemporaryPasswordGenerator as a singleton service
        builder.Services.AddSingleton<ITemporaryPasswordGenerator, TemporaryPasswordGenerator>();

        // Register the ClaimProvider as a scoped service
        builder.Services.AddScoped<IClaimProvider, ClaimProvider>();

        // Register the JwtProvider as a scoped service
        builder.Services.AddScoped<IJwtProvider, JwtProvider>();

        // Register the TokenService as a scoped service
        builder.Services.AddScoped<ITokenIssuer, TokenIssuer>();

        // Register the RefreshTokenProvider as a scoped service
        builder.Services.AddScoped<IRefreshTokenProvider, RefreshTokenProvider>();

        // Register Refresh Token Revocation Service as a scoped service
        builder.Services.AddScoped<IRefreshTokenRevocationService, RefreshTokenRevocationService>();

        // Register the RefreshTokenService as a scoped service
        builder.Services.AddScoped<ITokenService, TokenService>();

        return builder;
    }
}
