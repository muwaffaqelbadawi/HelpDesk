using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketReader
{
    // Pagination logic
    Task<PagedResult<TicketData>> GetAllAsync(
        GetTicketsQuery query,
        CancellationToken cancellationToken = default);

    // Search logic
    Task<IReadOnlyList<TicketData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default);

    // Select data logic
    Task<TicketData> GetByIdAsync(
        Guid ticketId,
        CancellationToken cancellationToken = default);
}
