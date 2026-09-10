using HelpDesk.src.Shared.DomainRules.Users.CreateUserAccount;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserExtension
{
    public static IServiceCollection AddUserServices(
        this IServiceCollection services)
    {
        // Register UserRepository as scoped service
        services.AddScoped<IUserRepository, UserRepository>();

        // Register UserReader as scoped service
        services.AddScoped<IUserReader, UserReader>();

        // Register DepartmentRules as scoped service
        services.AddScoped<IDepartmentRules, DepartmentRules>();

        // Register SectorRules as scoped service
        services.AddScoped<ISectorRules, SectorRules>();

        // Register CountryRules as scoped service
        services.AddScoped<ICountryRules, CountryRules>();

        // Register PhoneNumberRules as scoped service
        services.AddScoped<IPhoneNumberRules, PhoneNumberRules>();

        return services;
    }
}
