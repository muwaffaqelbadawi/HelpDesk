using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserReader
{
    Task<ApplicationUser?> GetUserAsync(string userId);

    // User + TimeZone
    Task<ApplicationUser?> GetUserWithTimeZoneAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + preferredLanguage
    Task<ApplicationUser?> GetUserWithPreferredLanguageAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + Sector
    Task<ApplicationUser?> GetUserWithSectorAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + Branch
    Task<ApplicationUser?> GetUserWithBranchAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + Department
    Task<ApplicationUser?> GetUserWithDepartmentAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + Company
    Task<ApplicationUser?> GetUserWithCompanyAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + Country
    Task<ApplicationUser?> GetUserWithCountryAsync(
        Guid userId,
        CancellationToken cancellationToken);

    // User + PhoneNumber
    Task<ApplicationUser?> GetUserWithPhoneNumberAsync(
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


    // ----- Settings -----


    // TimeZone
    Task<IReadOnlyCollection<SeedData>> GetAllActiveTimeZonesAsync(
        CancellationToken cancellationToken);

    Task<bool> IsTimeZoneExistAndActiveAsync(
        Guid timeZoneId,
        CancellationToken cancellationToken);

    // Language
    Task<IReadOnlyCollection<SeedData>> GetAllActiveLanguagesAsync(
        CancellationToken cancellationToken);

    Task<bool> IsLanguageExistAndActiveAsync(
        Guid languageId,
        CancellationToken cancellationToken);

    // Sector
    Task<IReadOnlyCollection<SeedData>> GetAllActiveSectorsAsync(
        CancellationToken cancellationToken);

    Task<bool> IsSectorExistAndActiveAsync(
        Guid sectorId,
        CancellationToken cancellationToken);

    // Branche
    Task<IReadOnlyCollection<SeedData>> GetAllActiveBranchesAsync(
        CancellationToken cancellationToken);

    Task<bool> IsBranchExistAndActiveAsync(
        Guid branchId,
        CancellationToken cancellationToken);

    // Department
    Task<Guid?> GetUserDepartmentIdAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<IReadOnlyCollection<SeedData>> GetAllActiveDepartmentsAsync(
        CancellationToken cancellationToken);

    Task<bool> IsDepartmentExistAndActiveAsync(
        Guid departmentId,
        CancellationToken cancellationToken);

    // Companies
    Task<IReadOnlyCollection<SeedData>> GetAllActiveCompaniesAsync(
        CancellationToken cancellationToken);

    Task<bool> IsCompanyExistAndActiveAsync(
        Guid companyId,
        CancellationToken cancellationToken);

    // Country
    Task<IReadOnlyCollection<SeedData>> GetAllActiveCountriesAsync(
        CancellationToken cancellationToken);

    Task<bool> IsCountryExistAndActiveAsync(
       Guid countryId,
       CancellationToken cancellationToken);
}
