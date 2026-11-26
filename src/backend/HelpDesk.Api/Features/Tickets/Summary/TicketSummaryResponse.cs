using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Tickets.Summary;

public sealed record TicketSummaryResponse(
    TicketSummaryData TicketSummaryData);
