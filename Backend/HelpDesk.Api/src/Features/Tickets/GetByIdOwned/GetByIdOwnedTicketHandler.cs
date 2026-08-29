using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.GetByIdOwned;

public sealed class GetByIdOwnedTicketHandler
    : IQueryHandler<GetByIdOwnedTicketQuery, GetByIdOwnedTicketResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetByIdOwnedTicketHandler> _logger;

    public GetByIdOwnedTicketHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetByIdOwnedTicketHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<GetByIdOwnedTicketResponse> HandleAsync(
        GetByIdOwnedTicketQuery query,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var ticketId = query.TicketId;

        var ticket = await _dbContext.Tickets
            .Where(t => t.Id == ticketId
                   && t.CreatedById == userId)
            .SelectTicketData()
            .SingleOrDefaultAsync(cancellationToken)
                ?? throw new TicketNotFoundException(ticketId);

        return new GetByIdOwnedTicketResponse(ticket);
    }
}
