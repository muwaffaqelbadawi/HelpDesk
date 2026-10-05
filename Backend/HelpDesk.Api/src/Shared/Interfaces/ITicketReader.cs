using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.QueryParameters;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketReader
{
    Task<PagedResult<TicketData>> GetAllAsync(
        GetTicketsParameters query,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyCollection<TicketData>> GetAssignedAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyCollection<TicketData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default);

    Task<TicketData> GetByIdAsync(
        Guid ticketId,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyCollection<TicketData>> GetMyTicketsAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<byte[]> GetNewRowAsync(
        Guid ticketId,
        CancellationToken cancellationToken = default);

    Task<(DateTimeOffset? AssignedAt, byte[] RowVersion)> GetStateAsync(
        Guid ticketId,
        CancellationToken cancellationToken = default);
}
