using HelpDesk.Shared.DataAccess.Readers;
using HelpDesk.Shared.DataAccess.Repositories;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Extensions;

public static class TicketServicesExtension
{
    public static IServiceCollection AddTicketServices(
        this IServiceCollection services)
    {
        // TicketRepository
        services.AddScoped<ITicketRepository, TicketRepository>();

        // TicketReader
        services.AddScoped<ITicketReader, TicketReader>();

        // TicketAttachmentReader
        services.AddScoped<ITicketAttachmentReader, TicketAttachmentReader>();

        return services;
    }
}
