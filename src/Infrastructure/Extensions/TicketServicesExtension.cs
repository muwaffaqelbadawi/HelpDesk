using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class TicketServicesExtension
{
    public static IServiceCollection AddTicketServices(
        this IServiceCollection services)
    {
        // GetAll
        services.AddScoped<IQueryHandler<PagedQuery, PagedResult<TicketData>>, GetTicketsHandler>();

        // Create
        services.AddScoped<ICommandHandler<CreateTicketCommand, CreateTicketResponse>, CreateTicketHandler>();

        // GetById
        services.AddScoped<IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse>, GetByIdTicketHandler>();

        // Delete
        services.AddScoped<ICommandHandler<DeleteTicketCommand>, DeleteTicketHandler>();

        return services;
    }
}

