using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.Delete;

public sealed class DeleteTicketHandler :
    ICommandHandler<DeleteTicketCommand>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteTicketHandler> _logger;

    public DeleteTicketHandler(
        IUserContext userContext,
        AppDbContext context,
        IDateTimeService dateTimeService,
        ILogger<DeleteTicketHandler> logger)
    {
        _userContext = userContext;
        _dbContext = context;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteTicketCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        var rows = await _dbContext.Tickets
            .Where(t => t.Id == command.TicketId
                 && t.RowVersion == command.TicketRowVersion
                 && t.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(t => t.DeletedById, userId)
                .SetProperty(t => t.DeletedAt, now)
                .SetProperty(t => t.IsDeleted, true),
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException($"Ticket {command.TicketId} was modified or deleted by another user.");
        }

        _logger.LogInformation("Ticket {TicketId} was deleted successfully", command.TicketId);
    }
}
