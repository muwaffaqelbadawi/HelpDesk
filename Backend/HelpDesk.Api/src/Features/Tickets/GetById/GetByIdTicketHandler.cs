using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.GetById;

public sealed class GetByIdTicketHandler(ITicketReader ticketReader)
    : IQueryHandler<GetByIdTicketQuery, GetByIdTicketResponse>
{
    public async Task<GetByIdTicketResponse> HandleAsync(
        GetByIdTicketQuery query,
        CancellationToken cancellationToken)
    {
        var ticketData = await ticketReader.GetByIdAsync(
            ticketId: query.TicketId,
            cancellationToken: cancellationToken);

        return new GetByIdTicketResponse(ticketData);
    }
}
