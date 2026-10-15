namespace HelpDesk.src.Shared.Interfaces;

public interface IPermissionsReader
{
    Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<IReadOnlyCollection<string>> GetPermissionsByRolesAsync(
        IReadOnlyCollection<string> roles,
        CancellationToken cancellationToken);
}
