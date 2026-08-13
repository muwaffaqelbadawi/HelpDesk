using HelpDesk.src.Features.Tickets.Assign;
using HelpDesk.src.Features.Tickets.Create;
using HelpDesk.src.Features.Tickets.Delete;
using HelpDesk.src.Features.Tickets.GetAll;
using HelpDesk.src.Features.Tickets.GetAssigned;
using HelpDesk.src.Features.Tickets.GetById;
using HelpDesk.src.Features.Tickets.GetByIdOwned;
using HelpDesk.src.Features.Tickets.GetOwned;
using HelpDesk.src.Features.Tickets.Update;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Data;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class TicketServicesExtension
{
    public static IServiceCollection AddTicketServices(
        this IServiceCollection services)
    {
        // GetAll (Admin)
        services.AddScoped<IQueryHandler<PagedQuery, PagedResult<TicketData>>, GetTicketsHandler>();

        // GetById
        services.AddScoped<IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse>, GetByIdTicketHandler>();

        // GetOwned (Self-service)
        services.AddScoped<IQueryHandler<OwnedTicketResponse>, GetOwnedTicketsHandler>();

        // GetOwned (Self-service)
        services.AddScoped<IQueryHandler<GetByIdOwnedTicketQuery, GetByIdOwnedTicketResponse>, GetByIdOwnedTicketHandler>();

        // Create
        services.AddScoped<ICommandHandler<CreateTicketCommand, CreateTicketResponse>, CreateTicketHandler>();

        // Update
        services.AddScoped<ICommandHandler<UpdateTicketCommand, UpdateTicketResponse>, UpdateTicketHandler>();

        // Delete
        services.AddScoped<ICommandHandler<DeleteTicketCommand>, DeleteTicketHandler>();

        // Assign (Admin)
        services.AddScoped<ICommandHandler<AssignTicketCommand, AssignTicketResponse>, AssignTicketHandler>();

        // GetAssigned (Admin)
        services.AddScoped<IQueryHandler<AssignedTicketsResponse>, GetAssignedTicketsHandler>();

        // TicketRepository
        services.AddScoped<ITicketRepository, TicketRepository>();

        // TicketReader
        services.AddScoped<ITicketReader, TicketReader>();

        return services;
    }
}
