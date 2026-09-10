using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Lookup;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class SeedersServicesExtension
{
    public static WebApplicationBuilder AddSeeders(
        this WebApplicationBuilder builder)
    {
        // Register LookupSeederRunner as a scoped service
        builder.Services.AddScoped<ILookupSeederRunner, LookupSeederRunner>();

        // Register TicketLookupService as a scoped service
        builder.Services.AddScoped<ITicketLookupService, TicketLookupService>();

        // Register UserLookupService as a scoped service
        builder.Services.AddScoped<IUserLookupService, UserLookupService>();

        return builder;
    }
}
