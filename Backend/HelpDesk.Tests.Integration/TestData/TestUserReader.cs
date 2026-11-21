using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.Tests.Integration.TestData;

internal sealed class TestUserReader(ApplicationUser user) : IUserReader
{
    public Task<ApplicationUser?> GetUserAsync(string userId) =>
        Task.FromResult<ApplicationUser?>(user);

    public Task<ApplicationUser?> GetUserWithTimeZoneAsync(
        Guid userId,
        CancellationToken cancellationToken) =>
            throw new NotImplementedException();

    public Task<ApplicationUser?> GetUserByEmailAsync(string email) =>
        throw new NotSupportedException();

    public Task<PagedResult<UserAccountData>> GetAllAsync(
        QueryParameters query,
        CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

    public Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

    public Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

    public Task<UserAccountRowVersionData> GetNewRowVersionAsync(
        Guid userId,
        CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

    public Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken = default) =>
            throw new NotSupportedException();

    public Task<bool> IsTimeZoneExistAsync(
        Guid timeZoneId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<string>> GetActiveTimeZonesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsTimeZoneExistAndActiveAsync(
        Guid timeZoneId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<string>> GetAllActiveTimeZonesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
