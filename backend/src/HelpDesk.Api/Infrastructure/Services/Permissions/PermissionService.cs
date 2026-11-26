using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.Services.Permissions;

public sealed class PermissionService(
    IUserContext userContext,
    IRolesReader roleReader,
    IPermissionsReader permissionsReader)
        : IPermissionService
{
    public async Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken)
    {
        var roles = await roleReader.GetUserRoleAsync(
            userContext.GuidUserId,
            cancellationToken);

        return await permissionsReader.GetPermissionsByRolesAsync(
            roles,
            cancellationToken);
    }
}
