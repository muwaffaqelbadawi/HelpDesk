using HelpDesk.src.Shared.Histories;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class TicketServicesExtension
{
    public static IServiceCollection AddTicketServices(
        this IServiceCollection services)
    {
        // GetAll (Admin)
        //services.AddScoped<IQueryHandler<GetTicketsQuery, PagedResult<TicketData>>, GetTicketsHandler>();

        // GetById
        //services.AddScoped<IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse>, GetByIdTicketHandler>();

        // GetOwned (Self-service)
        //services.AddScoped<IQueryHandler<OwnedTicketResponse>, GetOwnedTicketsHandler>();

        // GetOwned (Self-service)
        //services.AddScoped<IQueryHandler<GetByIdOwnedTicketQuery, GetByIdOwnedTicketResponse>, GetByIdOwnedTicketHandler>();

        // Create
        //services.AddScoped<ICommandHandler<CreateTicketCommand, CreateTicketResponse>, CreateTicketHandler>();

        // Update
        //services.AddScoped<ICommandHandler<UpdateTicketCommand, UpdateTicketResponse>, UpdateTicketHandler>();

        // Delete
        //services.AddScoped<ICommandHandler<DeleteTicketCommand>, DeleteTicketHandler>();

        // Assign (Admin)
        //services.AddScoped<ICommandHandler<AssignTicketCommand, AssignTicketResponse>, AssignTicketHandler>();

        // GetAssigned (Admin)
        //services.AddScoped<IQueryHandler<AssignedTicketsResponse>, GetAssignedTicketsHandler>();

        // TicketCreatedHandler (DomainEventHandler)
        //services.AddScoped<IDomainEventHandler<TicketCreated>, TicketCreatedHandler>();








        // We will leave these explicit registered for now since they don't have common abstraction yet

        // TicketRepository
        services.AddScoped<ITicketRepository, TicketRepository>();

        // TicketReader
        services.AddScoped<ITicketReader, TicketReader>();

        // TicketWriter
        services.AddScoped<ITicketHistoryWriter, TicketHistoryWriter>();

        return services;
    }
}
