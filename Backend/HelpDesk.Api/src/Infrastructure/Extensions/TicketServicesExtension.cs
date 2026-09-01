using HelpDesk.src.Shared.Histories.Writers;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Readers;

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
