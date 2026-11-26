using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.DataAccess.Dtos;
using HelpDesk.Shared.DataAccess.Queries;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Shared.Pagination;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Shared.DataAccess.Readers;

public sealed class UserReader(
    UserManager<ApplicationUser> userManager,
    AppDbContext dbContext)
        : IUserReader
{
    public Task<ApplicationUser?> GetUserAsync(string userId)
    {
        return userManager.FindByIdAsync(userId);
    }

    // User + TimeZone
    public async Task<ApplicationUser?> GetUserWithTimeZoneAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.TimeZone)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + PreferredLanguage
    public async Task<ApplicationUser?> GetUserWithPreferredLanguageAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.PreferredLanguage)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + Sector
    public async Task<ApplicationUser?> GetUserWithSectorAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.Employee)
            .ThenInclude(sector => sector!.Sector)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + Branch
    public async Task<ApplicationUser?> GetUserWithBranchAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.Employee)
            .ThenInclude(branch => branch!.Branch)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + Department
    public async Task<ApplicationUser?> GetUserWithDepartmentAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.Employee)
            .ThenInclude(department => department!.Department)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + Company
    public async Task<ApplicationUser?> GetUserWithCompanyAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.Employee)
            .ThenInclude(company => company!.Company)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + Country
    public async Task<ApplicationUser?> GetUserWithCountryAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.Employee)
            .ThenInclude(country => country!.Country)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    // User + PhoneNumber
    public async Task<ApplicationUser?> GetUserWithPhoneNumberAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Include(u => u.Employee)
            .ThenInclude(employee => employee!.Country)
            .SingleOrDefaultAsync(
                u => u.Id == userId,
                cancellationToken);
    }

    public Task<ApplicationUser?> GetUserByEmailAsync(string email)
    {
        return userManager.FindByEmailAsync(email);
    }

    public async Task<PagedResult<UserAccountData>> GetAllAsync(
        QueryParameters query,
        CancellationToken cancellationToken)
    {
        var queryable = dbContext.Users
            .AsNoTracking()
            .AsQueryable();

        var totalCount = await queryable.CountAsync(cancellationToken);

        var users = await queryable
            .OrderByDescending(u => u.CreatedAt)
            .Skip(query.Offset)
            .Take(query.PageSize)
            .SelectUserAccount()
            .ToListAsync(cancellationToken);

        var totalPages = TotalPages.Calculate(
            totalCount,
            query.PageSize);

        return new PagedResult<UserAccountData>(
            Items: users,
            PageNumber: query.PageNumber,
            PageSize: query.PageSize,
            TotalCount: totalCount,
            TotalPages: totalPages);
    }

    public async Task<IReadOnlyList<UserAccountData>> GetAsync(
        string? search,
        int offset,
        int pageSize,
        CancellationToken cancellationToken)
    {
        var query = dbContext.Users
            .AsNoTracking();

        if (!string.IsNullOrWhiteSpace(search))
        {
            query = query.Where(u =>
                (u.UserName != null && u.UserName.Contains(search)) ||
                (u.Email != null && u.Email.Contains(search)) ||
                (u.Employee != null && (
                    u.Employee.Number.Contains(search) ||
                    u.Employee.FullEnName.Contains(search) ||
                    (u.Employee.FullArName != null &&
                     u.Employee.FullArName.Contains(search)))));
        }

        return await query
            .SelectUserAccount()
            .Skip(offset)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
    }

    public async Task<UserAccountData> GetByIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);
    }

    public async Task<UserAccountRowVersionData> GetNewRowVersionAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .Where(u => u.Id == userId)
            .Select(u => new UserAccountRowVersionData
            {
                UserRowVersion = u.RowVersion,
                EmployeeRowVersion = u.Employee!.RowVersion
            })
            .SingleAsync(cancellationToken);
    }

    public async Task<bool> IsEmployee(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Users
            .AnyAsync(
                u => u.Id == userId && u.Employee != null,
                cancellationToken);
    }

    // ----- Seeders -----

    // TimeZone (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveTimeZonesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.TimeZones
            .AsNoTracking()
            .Where(t => t.IsActive)
            .OrderBy(t => t.Name)
            .Select(t => new SeedData
            {
                Id = t.Id,
                Name = t.Name
            })
            .ToListAsync(cancellationToken);
    }

    // TimeZone (ExistAndActive)
    public async Task<bool> IsTimeZoneExistAndActiveAsync(
        Guid timeZoneId,
        CancellationToken cancellationToken)
    {
        return await dbContext.TimeZones
        .AnyAsync(
            t => t.Id == timeZoneId && t.IsActive,
            cancellationToken);
    }

    // Language (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveLanguagesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Languages
            .AsNoTracking()
            .Where(l => l.IsActive)
            .OrderBy(l => l.Name)
            .Select(l => new SeedData
            {
                Id = l.Id,
                Name = l.Name
            })
            .ToListAsync(cancellationToken);
    }

    // Language (ExistAndActive)
    public async Task<bool> IsLanguageExistAndActiveAsync(
        Guid languageId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Languages
        .AnyAsync(
            t => t.Id == languageId && t.IsActive,
            cancellationToken);
    }

    // Sector (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveSectorsAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Sectors
            .AsNoTracking()
            .Where(s => s.IsActive)
            .OrderBy(s => s.Name)
            .Select(s => new SeedData
            {
                Id = s.Id,
                Name = s.Name
            })
            .ToListAsync(cancellationToken);
    }

    // Sector (ExistAndActive)
    public async Task<bool> IsSectorExistAndActiveAsync(
        Guid selectorId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Sectors
        .AnyAsync(
            s => s.Id == selectorId && s.IsActive,
            cancellationToken);
    }

    // Department (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveDepartmentsAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Departments
            .AsNoTracking()
            .Where(d => d.IsActive)
            .OrderBy(d => d.Name)
            .Select(d => new SeedData
            {
                Id = d.Id,
                Name = d.Name
            })
            .ToListAsync(cancellationToken);
    }

    // Department (ExistAndActive)
    public async Task<bool> IsDepartmentExistAndActiveAsync(
        Guid departmentId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Departments
        .AnyAsync(
            d => d.Id == departmentId && d.IsActive,
            cancellationToken);
    }

    // Branch (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveBranchesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Branches
            .AsNoTracking()
            .Where(d => d.IsActive)
            .OrderBy(d => d.Name)
            .Select(d => new SeedData
            {
                Id = d.Id,
                Name = d.Name
            })
            .ToListAsync(cancellationToken);
    }

    // Branch (ExistAndActive)
    public async Task<bool> IsBranchExistAndActiveAsync(
        Guid branchId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Branches
        .AnyAsync(
            d => d.Id == branchId && d.IsActive,
            cancellationToken);
    }

    public async Task<Guid?> GetUserDepartmentIdAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        // Scalar projection
        // Instead of fetching the entire department record

        return await dbContext.Departments
            .AsNoTracking()
            .Where(d => d.Employees.Any(e => e.UserId == userId))
            .Select(d => (Guid?)d.Id)
            .SingleOrDefaultAsync(cancellationToken);
    }

    // Company (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveCompaniesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Companies
            .AsNoTracking()
            .Where(d => d.IsActive)
            .OrderBy(d => d.Name)
            .Select(d => new SeedData
            {
                Id = d.Id,
                Name = d.Name
            })
            .ToListAsync(cancellationToken);
    }

    // Company (ExistAndActive)
    public async Task<bool> IsCompanyExistAndActiveAsync(
        Guid companyId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Countries
        .AnyAsync(
            d => d.Id == companyId && d.IsActive,
            cancellationToken);
    }

    // Country (GetAllActive)
    public async Task<IReadOnlyCollection<SeedData>> GetAllActiveCountriesAsync(
        CancellationToken cancellationToken)
    {
        return await dbContext.Countries
            .AsNoTracking()
            .Where(c => c.IsActive)
            .OrderBy(c => c.Name)
            .Select(c => new SeedData
            {
                Id = c.Id,
                Name = c.Name
            })
            .ToListAsync(cancellationToken);
    }

    // Country (ExistAndActive)
    public async Task<bool> IsCountryExistAndActiveAsync(
        Guid countryId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Countries
            .AnyAsync(
                c => c.Id == countryId && c.IsActive,
                cancellationToken);
    }
}
