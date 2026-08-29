namespace HelpDesk.src.Shared.Interfaces;

public interface IPermissionService
{
    Task<IReadOnlyCollection<string>> GetUserPermissionsAsync(
        CancellationToken cancellationToken);
}
