using HelpDesk.Infrastructure.SystemAccounts.Superadmin;
using HelpDesk.Shared.DataAccess.Readers;
using HelpDesk.Shared.DataAccess.Repositories;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

public static class SuperadminServicesExtension
{
    public static WebApplicationBuilder AddSuperadmin(
        this WebApplicationBuilder builder)
    {
        // Register AdminHandler as a Scoped service
        builder.Services.AddScoped<ICommandHandler<SuperadminCommand, SuperadminResponse>, SuperadminHandler>();

        // Registered SuperadminReader as Scoped service
        builder.Services.AddScoped<ISuperadminReader, SuperadminReader>();

        // Registered SuperadminRepository as Scoped service
        builder.Services.AddScoped<ISuperadminRepository, SuperadminRepository>();

        return builder;
    }
}
