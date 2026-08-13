using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketReader
{
    Task<PagedResult<TicketData>> GetAllAsync(
        PagedQuery query,
        CancellationToken cancellationToken = default);

    Task<TicketData> GetByIdAsync(
        Guid ticketId,
        CancellationToken cancellationToken = default);
}
