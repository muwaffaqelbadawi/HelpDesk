using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.Pagination;

namespace HelpDesk.Features.Tickets.GetAll;

public sealed record GetTicketsResponse(
    PagedResult<TicketData> PagedResult);