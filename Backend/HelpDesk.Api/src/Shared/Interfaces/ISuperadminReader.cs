using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Shared.Interfaces;

public interface ISuperadminReader
{
    Task<ApplicationUser?> CheckExistingSuperadminAsync(
        CancellationToken cancellationToken);

    Task<SuperadminAccountData> GetSuperadminAsync(
        Guid userId,
        CancellationToken cancellationToken);
}
