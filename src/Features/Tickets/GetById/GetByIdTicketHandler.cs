using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Tickets.GetById;

public sealed class GetByIdTicketHandler
    : IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse>
{
    private readonly AppDbContext _dbContext;

    public GetByIdTicketHandler(AppDbContext context)
    {
        _dbContext = context;
    }

    public async Task<GetByIdTicketResponse> HandleAsync(
        GetByIdTicketQuery query,
        CancellationToken cancellationToken)
    {
        var ticket = await _dbContext.Tickets
            .Where(t => t.Id == query.TicketId)
            .SelectTicketData()
            .SingleOrDefaultAsync(cancellationToken)
                ?? throw new TicketNotFoundException($"Ticket {query.TicketId} was not found.");

        return new GetByIdTicketResponse(ticket);
    }
}
