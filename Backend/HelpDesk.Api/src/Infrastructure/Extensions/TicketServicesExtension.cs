using HelpDesk.src.Shared.DataAccess.Readers;
using HelpDesk.src.Shared.DataAccess.Writers;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class TicketServicesExtension
{
    public static IServiceCollection AddTicketServices(
        this IServiceCollection services)
    {
        // TicketRepository
        services.AddScoped<ITicketRepository, TicketRepository>();

        // TicketReader
        services.AddScoped<ITicketReader, TicketReader>();

        // TicketWriter
        services.AddScoped<ITicketWriter, TicketWriter>();

        return services;
    }
}
