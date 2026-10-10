using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

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
}
