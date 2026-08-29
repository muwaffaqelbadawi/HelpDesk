using HelpDesk.src.Features.Admin;
using HelpDesk.src.Infrastructure.Services.Seeders.Runner;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AdminServicesExtension
{
    public static IServiceCollection AddAdminServices(
        this IServiceCollection service)
    {
        service.AddScoped<ICommandHandler<AdminCommand, AdminResponse>, AdminHandler>();

        // Admin seed runner (bootstrap)
        service.AddScoped<IAdminSeedRunner, AdminSeedRunner>();

        return service;
    }
}
