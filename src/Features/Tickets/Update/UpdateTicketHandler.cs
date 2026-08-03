using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using Microsoft.EntityFrameworkCore;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed class UpdateTicketHandler :
    ICommandHandler<UpdateTicketCommand, UpdateTicketResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly AppDbContext _dbContext;
    private readonly ILookupService _lookup;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<UpdateTicketHandler> _logger;

    public UpdateTicketHandler(

        IUserProvider userProvider,
        AppDbContext dbContext,
        ILookupService lookup,
        IDateTimeService dateTimeService,
        ILogger<UpdateTicketHandler> logger)
    {
        _userProvider = userProvider;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
        _lookup = lookup;
    }

    public async Task<UpdateTicketResponse> HandleAsync(
        UpdateTicketCommand command,
        CancellationToken cancellationToken)
    {
        // Get the authenticated user
        var user = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Ticket priority
        var priority = _lookup.GetPriority(command.PriorityId);

        // Ticket status
        var status = _lookup.GetStatus(command.StatusId);

        var nowUtc = _dateTimeService.UtcNow;

        // Update instantly
        var rows = await _dbContext.Tickets
            .Where(t => t.Id == command.TicketId
                 && t.RowVersion == command.ExpectedRowVersion
                 && t.CreatedById == user.Id)
            .ExecuteUpdateAsync(setters => setters
            .SetProperty(t => t.Title, command.Title)
            .SetProperty(t => t.Subject, command.Subject)
            .SetProperty(t => t.PriorityId, priority.Id)
            .SetProperty(t => t.StatusId, status.Id)
            .SetProperty(t => t.UpdatedById, user.Id)
            .SetProperty(t => t.UpdatedAt, _dateTimeService.UtcNow),
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

        return new UpdateTicketResponse(newRowVersion);
    }
}
