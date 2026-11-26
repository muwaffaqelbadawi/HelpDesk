using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Features.Tickets.GetById;

public sealed record GetByIdTicketResponse(
    TicketData TicketData);
