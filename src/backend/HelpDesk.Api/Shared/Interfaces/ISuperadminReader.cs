using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Shared.Interfaces;

public interface ISuperadminReader
{
    Task<ApplicationUser?> CheckExistingSuperadminAsync(
        CancellationToken cancellationToken);

    Task<SuperadminAccountData> GetSuperadminAsync(
        Guid userId,
        CancellationToken cancellationToken);
}
