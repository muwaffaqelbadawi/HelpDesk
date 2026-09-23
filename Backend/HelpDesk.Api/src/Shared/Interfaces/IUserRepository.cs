using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IUserRepository
{
    Task AddAsync(ApplicationUser user);

    Task AddAsync(
        ApplicationUser user,
        Employee employee,
        string tempPassword,
        CancellationToken cancellationToken);

    Task DeleteAsync(
        ApplicationUser user,
        Guid currentUserId,
        DateTimeOffset now,
        CancellationToken cancellationToken);
}
