using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.GetAssigned;

public sealed class GetAssignedTicketsHandler
    : IQueryHandler<AssignedTicketsResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;

    public GetAssignedTicketsHandler(
        IUserContext userContext,
        AppDbContext dbContext)
    {
        _userContext = userContext;
        _dbContext = dbContext;
    }

    public async Task<AssignedTicketsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service
        var userId = _userContext.GuidUserId;

        var assignedTickets = await _dbContext.Tickets
            .Where(t => t.AssignedToId == userId)
            .OrderByDescending(t => t.AssignedAt)
            .SelectTicketData()
            .ToListAsync(cancellationToken);

        return new AssignedTicketsResponse(assignedTickets);
    }
}
