using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserAccountServicesExtension
{
    public static IServiceCollection AddUserServices(
        this IServiceCollection services)
    {
        // UserRepository
        services.AddScoped<IUserRepository, UserRepository>();

        // UserReader
        services.AddScoped<IUserReader, UserReader>();

        return services;
    }
}
