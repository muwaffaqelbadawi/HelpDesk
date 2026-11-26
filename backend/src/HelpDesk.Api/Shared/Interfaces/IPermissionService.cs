namespace HelpDesk.Shared.Interfaces;

public interface IPermissionService
{
    Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken);
}
