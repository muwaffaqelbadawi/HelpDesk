using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed class UpdateTicketHandler :
    ICommandHandler<UpdateTicketCommand, UpdateTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ITicketLookupService _ticketLookup;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<UpdateTicketHandler> _logger;

    public UpdateTicketHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ITicketLookupService ticketLookup,
        IDateTimeService dateTimeService,
        ILogger<UpdateTicketHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _ticketLookup = ticketLookup;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<UpdateTicketResponse> HandleAsync(
        UpdateTicketCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        // Ticket priority
        var priority = _ticketLookup.GetPriority(command.TicketPriorityId);

        // Ticket status
        var status = _ticketLookup.GetStatus(command.TicketStatusId);

        var rows = await _dbContext.Tickets
            .Where(t => t.Id == command.TicketId
                 && t.RowVersion == command.TicketRowVersion
                 && t.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(t => t.Title, command.TicketTitle)
                .SetProperty(t => t.Subject, command.TicketSubject)
                .SetProperty(t => t.PriorityId, priority.Id)
                .SetProperty(t => t.StatusId, status.Id)
                .SetProperty(t => t.UpdatedById, userId)
                .SetProperty(t => t.UpdatedAt, now),
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException($"Ticket {command.TicketId} was modified or deleted by another user.");
        }

        // Returns the new row version (adds a little overhead)
        var newRowVersion = await _dbContext.Tickets
            .Where(t => t.Id == command.TicketId)
            .Select(t => t.RowVersion)
            .SingleAsync(cancellationToken);

        _logger.LogInformation("Ticket {TicketId} was updated successfully", command.TicketId);

        return new UpdateTicketResponse(
            NewRowVersion: newRowVersion);
    }
}
