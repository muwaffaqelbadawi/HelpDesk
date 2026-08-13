using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class IdentityConfigurationExtension
{
    public static IServiceCollection AddIdentityConfiguration(
        this IServiceCollection services)
    {
        services
            .AddIdentityCore<ApplicationUser>()
            .AddEntityFrameworkStores<AppDbContext>()
            .AddRoles<ApplicationRole>()
            .AddDefaultTokenProviders();

        return services;
    }
}


//options =>
//            {
//                // Password options
//                options.Password.RequireDigit = true;
//                options.Password.RequireUppercase = true;
//                options.Password.RequireLowercase = true;
//                options.Password.RequireNonAlphanumeric = true;
//                options.Password.RequiredLength = 8;

//                // Lockout
//                options.Lockout.MaxFailedAccessAttempts = 5;
//                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);

//                // User
//                options.User.RequireUniqueEmail = true;
//            }
