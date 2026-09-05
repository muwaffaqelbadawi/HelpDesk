using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;
using HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class SuperadminServicesExtension
{
    public static WebApplicationBuilder AddSuperadmin(
        this WebApplicationBuilder builder)
    {
        // Register AdminHandler as a Scoped service
        builder.Services.AddScoped<ICommandHandler<SuperadminCommand, SuperadminResponse>, SuperadminHandler>();

        // Register Superadmin seed runner as Scoped service
        builder.Services.AddScoped<ISuperadminSeedRunner, SuperadminSeedRunner>();

        // Registered SuperadminReader as Scoped service
        builder.Services.AddScoped<ISuperadminReader, SuperadminReader>();

        // Registered SuperadminRepository as Scoped service
        builder.Services.AddScoped<ISuperadminRepository, SuperadminRepository>();

        return builder;
    }
}
