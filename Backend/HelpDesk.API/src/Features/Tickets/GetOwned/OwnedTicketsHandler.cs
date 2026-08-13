using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.GetOwned;

public sealed class GetOwnedTicketsHandler
    : IQueryHandler<OwnedTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetOwnedTicketsHandler> _logger;

    public GetOwnedTicketsHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetOwnedTicketsHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<OwnedTicketResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service
        // Get all owned tickets

        var userId = _userContext.GuidUserId;

        var tickets = await _dbContext.Tickets
            .Where(t => t.CreatedById == userId)
            .OrderByDescending(t => t.CreatedAt)
            .SelectTicketData()
            .ToListAsync(cancellationToken);

        return new OwnedTicketResponse(tickets);
    }
}
