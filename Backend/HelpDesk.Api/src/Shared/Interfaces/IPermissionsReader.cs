namespace HelpDesk.src.Shared.Interfaces;

public interface IPermissionsReader
{
    Task<IReadOnlyCollection<string>> GetPermissionsByRolesAsync(
        IReadOnlyCollection<string> roles,
        CancellationToken cancellationToken);
}
