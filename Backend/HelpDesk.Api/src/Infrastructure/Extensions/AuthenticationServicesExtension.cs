using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.HttpContexts;
using HelpDesk.src.Infrastructure.Services.ChangePassword;
using HelpDesk.src.Infrastructure.Services.ResetPassword;
using HelpDesk.src.Infrastructure.Services.Security;
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

        // Register the RolesReader as a scoped service
        builder.Services.AddScoped<IRolesReader, RolesReader>();

        // Register the RoleRepository as a scoped service
        builder.Services.AddScoped<IRolesRepository, RolesRepository>();

        // Register the ModulesReader as a scoped service
        builder.Services.AddScoped<IModulesReader, ModulesReader>();

        // Register the ModuleRepository as a scoped service
        builder.Services.AddScoped<IModulesRepository, ModulesRepository>();

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

        return builder;
    }
}
