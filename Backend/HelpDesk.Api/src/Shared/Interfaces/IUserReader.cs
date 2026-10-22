using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserReader
{
    Task<ApplicationUser?> GetUserAsync(string userId);

    Task<ApplicationUser?> GetUserByEmailAsync(string email);

    Task<PagedResult<UserAccountData>> GetAllAsync(
        QueryParameters query,
        CancellationToken cancellationToken = default);

    Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default);

    Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<UserAccountRowVersionData> GetNewRowVersionAsync(
        Guid userId,
        CancellationToken cancellationToken = default);

    Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken = default);
}
