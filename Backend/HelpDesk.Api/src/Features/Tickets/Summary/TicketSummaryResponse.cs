using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Tickets.Summary;

public sealed record TicketSummaryResponse(
    TicketSummaryData TicketSummaryData);
