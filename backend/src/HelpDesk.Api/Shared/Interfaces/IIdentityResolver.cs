using HelpDesk.Features.Auth.Login;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.Shared.Interfaces;

public interface IIdentityResolver
{
    Task<ApplicationUser> ResolveIdentity(
        LoginCommand command,
        CancellationToken cancellationToken);

    Task ResolvePassword(
        ApplicationUser user,
        LoginCommand command);
}
