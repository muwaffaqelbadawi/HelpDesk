using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Tickets.GetById;

public sealed record GetByIdTicketResponse(
    TicketData TicketData);
