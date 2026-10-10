using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Infrastructure.Services.ChangePassword;
using HelpDesk.src.Infrastructure.Services.Jwt;
using HelpDesk.src.Infrastructure.Services.ResetPassword;
using HelpDesk.src.Infrastructure.Services.Security;
using HelpDesk.src.Infrastructure.Services.UserProviders;
using HelpDesk.src.Shared.DataAccess.Readers;
using HelpDesk.src.Shared.DataAccess.Repositories;
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

        // Register HttpContextAccessor
        builder.Services.AddHttpContextAccessor();

        // Register the UserContext as a scoped service
        builder.Services.AddScoped<IUserContext, UserContext>();

        // Register the UserProvider as a scoped service
        builder.Services.AddScoped<IUserProvider, UserProvider>();

        // Register the RoleReader as a scoped service
        builder.Services.AddScoped<IRolesReader, RolesReader>();

        // Register the RoleRepository as a scoped service
        builder.Services.AddScoped<IRolesRepository, RolesRepository>();

        // Register the PermissionReader as a scoped service
        builder.Services.AddScoped<IPermissionsReader, PermissionsReader>();

        // Register the PermissionRepository as a scoped service
        builder.Services.AddScoped<IPermissionsRepository, PermissionsRepository>();

        // Register the UserIdentityFilter as a scoped service
        builder.Services.AddScoped<IdentityFilter>();

        // Register the IdentityResolver as a scoped service
        builder.Services.AddScoped<IIdentityResolver, IdentityResolver>();

        // Register the PasswordHasher as a scoped service
        builder.Services.AddScoped<IPasswordHasher<ApplicationUser>, PasswordHasher<ApplicationUser>>();

        // Register the TemporaryPasswordGenerator as a singleton service
        builder.Services.AddSingleton<ITemporaryPasswordGenerator, TemporaryPasswordGenerator>();

        // Register ResetPasswordPolicy as scoped service
        builder.Services.AddScoped<IResetPasswordPolicy, ResetPasswordPolicy>();

        // Register ResetPasswordState as scoped service
        builder.Services.AddScoped<IResetPasswordState, ResetPasswordState>();

        // Register ResetPasswordService as scoped service
        builder.Services.AddScoped<IResetPasswordService, ResetPasswordService>();

        // Register ChangePasswordService as scoped service
        builder.Services.AddScoped<IChangePasswordService, ChangePasswordService>();


        // JWT
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
