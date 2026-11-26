using HelpDesk.Shared.DataAccess.Readers;
using HelpDesk.Shared.DataAccess.Repositories;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

public static class UserServicesExtension
{
    public static IServiceCollection AddUserServices(
        this IServiceCollection services)
    {
        // Register UserRepository as scoped service
        services.AddScoped<IUserRepository, UserRepository>();

        // Register UserLoginRepository as scoped service
        services.AddScoped<IUserLoginRepository, UserLoginRepository>();

        // Register UserReader as scoped service
        services.AddScoped<IUserReader, UserReader>();

        return services;
    }
}
