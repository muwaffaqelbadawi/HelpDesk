using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Summary;

public sealed class TicketSummaryHandler(
    ITicketReader ticketReader,
    ILogger<TicketSummaryHandler> logger)
    : IQueryHandler<TicketSummaryQuery, TicketSummaryResponse>
{
    public async Task<TicketSummaryResponse> HandleAsync(
        TicketSummaryQuery query,
        CancellationToken cancellationToken)
    {
        var ticketDataSummary = await ticketReader.GetTicketSummaryAsync(cancellationToken);

        logger.LogInformation("");

        return new TicketSummaryResponse(ticketDataSummary);
    }
}
