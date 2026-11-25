using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.Tests.Integration.TestData;

internal sealed class TestUserReader(ApplicationUser user) : IUserReader
{
    public Task<ApplicationUser?> GetUserAsync(string userId)
    {
        return Task.FromResult<ApplicationUser?>(user);
    }

    public Task<ApplicationUser?> GetUserWithTimeZoneAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserByEmailAsync(string email)
    {
        throw new NotSupportedException();
    }

    public Task<PagedResult<UserAccountData>> GetAllAsync(
        QueryParameters query,
        CancellationToken cancellationToken = default)
    {
        throw new NotSupportedException();
    }

    public Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken = default)
    {
        throw new NotSupportedException();
    }

    public Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        throw new NotSupportedException();
    }

    public Task<UserAccountRowVersionData> GetNewRowVersionAsync(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        throw new NotSupportedException();
    }

    public Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken = default)
    {
        throw new NotSupportedException();
    }

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

    public Task<IReadOnlyCollection<string>> GetAllActiveLanguagesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithPreferredLanguageAsync(
        Guid userId, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsLanguageExistAndActiveAsync(
        Guid languageId, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    Task<IReadOnlyCollection<SeedData>> IUserReader.GetAllActiveTimeZonesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    Task<IReadOnlyCollection<SeedData>> IUserReader.GetAllActiveLanguagesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<SeedData>> GetAllActiveSectorsAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsSectorExistAndActiveAsync(
        Guid sectorId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<SeedData>> GetAllActiveDepartmentsAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsDepartmentExistAndActiveAsync(
        Guid departmentId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<SeedData>> GetAllActiveCountriesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsCountryExistAndActiveAsync(
        Guid countryId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithSectorAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithDepartmentAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithCountryAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithPhoneNumberAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<Guid?> GetUserDepartmentIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<SeedData>> GetAllActiveBranchesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsBranchExistAndActiveAsync(
        Guid branchId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<IReadOnlyCollection<SeedData>> GetAllActiveCompaniesAsync(
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<bool> IsCompanyExistAndActiveAsync(
        Guid companyId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithBranchAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<ApplicationUser?> GetUserWithCompanyAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
