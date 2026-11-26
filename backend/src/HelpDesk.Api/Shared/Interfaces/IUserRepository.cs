using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IUserRepository
{
    Task AddAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);

    Task AddAsync(
        ApplicationUser user,
        Employee employee,
        string tempPassword,
        CancellationToken cancellationToken);

    Task AddToHistory(
        Guid userId,
        UserHistoryType type,
        DateTimeOffset occurredAt,
        CancellationToken cancellationToken = default);

    Task DeleteAsync(
        ApplicationUser user,
        Guid currentUserId,
        DateTimeOffset now,
        CancellationToken cancellationToken);

    Task UpdateAsync(
        ApplicationUser user,
        CancellationToken cancellationToken);

    Task<int> UpdateAsync(
        Guid currentUserId,
        Guid userId,
        string userName,
        string email,
        string fullEnName,
        string fullArName,
        DateTimeOffset now,
        byte[] userRowVersion,
        byte[] employeeRowVersion,
        CancellationToken cancellationToken);

    Task<int> UpdateAsync(
        Guid userId,
        string userName,
        string email,
        string fullEnName,
        string fullArName,
        DateTimeOffset now,
        byte[] employeeRowVersion,
        byte[] userRowVersion,
        CancellationToken cancellationToken);

    Task<int> UpdatePasswordAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken);

    Task<int> ResetPasswordAsync(
        Guid userId,
        DateTimeOffset now,
        CancellationToken cancellationToken);


    // ----- Settings -----

    // UpdateById (after settings)
    Task<int> UpdateByIdAsync(
        Guid userId,
        Guid updaterUserId,
        CancellationToken cancellationToken);

    // TimeZone
    Task<int> UpdateTimeZoneAsync(
        Guid userId,
        Guid timeZoneId,
        CancellationToken cancellationToken);

    // Language
    Task<int> UpdatePreferredLanguageAsync(
        Guid userId,
        Guid preferredLanguageId,
        CancellationToken cancellationToken);

    // Branch
    Task<int> UpdateBranchAsync(
        Guid userId,
        Guid departmentId,
        CancellationToken cancellationToken);

    // Department
    Task<int> UpdateDepartmentAsync(
        Guid userId,
        Guid departmentId,
        CancellationToken cancellationToken);

    // Sector
    Task<int> UpdateSectorAsync(
        Guid userId,
        Guid sectorId,
        CancellationToken cancellationToken);

    // Company
    Task<int> UpdateCompanyAsync(
        Guid userId,
        Guid companyId,
        CancellationToken cancellationToken);

    // Country
    Task<int> UpdateCountryAsync(
        Guid userId,
        Guid countryId,
        CancellationToken cancellationToken);




    // TicketPriority
    //Task<int> UpdateTicketPriorityAsync(
    //    Guid userId,
    //    Guid ticketId,
    //    Guid priorityId,
    //    CancellationToken cancellationToken);




    // PhoneNumber
    Task<int> UpdatePhoneNumberAsync(
        Guid userId,
        string phoneNumber,
        CancellationToken cancellationToken);
}
