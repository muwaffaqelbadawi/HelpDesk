using HelpDesk.src.Features.Auth.Login;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IIdentityResolver
{
    Task<ApplicationUser> ResolveIdentity(
        LoginCommand command,
        CancellationToken cancellationToken);

    Task ResolvePassword(
        ApplicationUser user,
        LoginCommand command);
}
