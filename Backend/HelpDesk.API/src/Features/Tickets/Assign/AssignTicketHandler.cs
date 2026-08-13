using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.Assign;

public sealed class AssignTicketHandler
    : ICommandHandler<AssignTicketCommand, AssignTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<AssignTicketHandler> _logger;

    public AssignTicketHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<AssignTicketHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<AssignTicketResponse> HandleAsync(
        AssignTicketCommand command,
        CancellationToken cancellationToken)
    {
        // admin
        var currentUserId = _userContext.GuidUserId;

        // Assigned ticket
        var ticketId = command.TicketId;

        // AssignedTo user
        var userId = command.UserId;

        // now
        var now = _dateTimeService.UtcNow;

        // Ticket can't be assigned to a user with no employee
        var isEmployeeUser = await _dbContext.Users
            .AnyAsync(
                u => u.Id == userId
                  && u.Employee != null,
                cancellationToken);

        if (!isEmployeeUser)
        {
            throw new DomainException(
                $"User {userId} cannot be assigned tickets because they are not an employee.");
        }

        // Ticket row
        var rows = await _dbContext.Tickets
            .Where(t => t.Id == ticketId
                     && t.RowVersion == command.TicketRowVersion
                     && t.AssignedAt == null)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(t => t.AssignedById, currentUserId)
                .SetProperty(t => t.AssignedToId, userId)
                .SetProperty(t => t.AssignedAt, now),
            cancellationToken);

        if (rows == 0)
        {
            var state = await _dbContext.Tickets
                .AsNoTracking()
                .Where(t => t.Id == ticketId)
                .Select(t => new
                {
                    t.AssignedAt,
                    t.RowVersion
                })
                .SingleOrDefaultAsync(cancellationToken);

            if (state is null)
            {
                throw new TicketNotFoundException(ticketId);
            }

            if (state.AssignedAt is not null)
            {
                throw new DomainException($"Ticket {ticketId} is already assigned");
            }

            throw new ConcurrencyException(
                $"Ticket {ticketId} was modified or deleted by another user.");
        }

        _logger.LogInformation(
            "Ticket {TicketId} assigned to user {UserId} by user {AssignedById}",
            ticketId,
            userId,
            currentUserId);

        var ticketData = await _dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.Id == ticketId)
            .SelectTicketData()
            .SingleAsync(cancellationToken);

        return new AssignTicketResponse(ticketData);
    }
}
