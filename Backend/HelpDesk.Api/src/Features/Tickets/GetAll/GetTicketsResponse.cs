using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Features.Tickets.GetAll;

public sealed record GetTicketsResponse(
    PagedResult<TicketData> PagedResult);