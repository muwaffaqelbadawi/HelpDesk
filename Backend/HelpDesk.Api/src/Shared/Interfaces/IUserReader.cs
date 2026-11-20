using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserReader
{
    Task<ApplicationUser?> GetUserAsync(string userId);

    Task<ApplicationUser?> GetUserWithTimeZoneAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<ApplicationUser?> GetUserByEmailAsync(string email);

    Task<PagedResult<UserAccountData>> GetAllAsync(
        QueryParameters query,
        CancellationToken cancellationToken);

    Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken);

    Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<UserAccountRowVersionData> GetNewRowVersionAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken);

    Task<bool> IsTimeZoneExistAndActiveAsync(
        Guid timeZoneId,
        CancellationToken cancellationToken);

    Task<IReadOnlyCollection<string>> GetActiveTimeZonesAsync(
        CancellationToken cancellationToken);
}
