using HelpDesk.src.Infrastructure.Services.Seeders.Runner;
using HelpDesk.src.Infrastructure.SystemAccounts.Admin;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AdminServicesExtension
{
    public static WebApplicationBuilder AddAdmin(
        this WebApplicationBuilder builder)
    {
        // Register AdminHandler as a Scoped service
        builder.Services.AddScoped<ICommandHandler<AdminCommand, AdminResponse>, AdminHandler>();

        // Admin seed runner (bootstrap)
        builder.Services.AddScoped<IAdminSeedRunner, AdminSeedRunner>();

        return builder;
    }
}
