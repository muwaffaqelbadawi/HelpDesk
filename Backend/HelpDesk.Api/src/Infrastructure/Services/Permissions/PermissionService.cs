using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Permissions;

public sealed class PermissionService(
    IUserContext userContext,
    IRolesReader roleReader,
    IPermissionsReader permissionsReader)
        : IPermissionService
{
    public async Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken)
    {
        var roles = await roleReader.GetUserRolesAsync(
            userContext.GuidUserId,
            cancellationToken);

        return await permissionsReader.GetPermissionsByRolesAsync(
            roles,
            cancellationToken);
    }
}
