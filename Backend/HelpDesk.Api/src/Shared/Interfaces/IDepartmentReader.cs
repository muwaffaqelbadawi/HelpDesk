namespace HelpDesk.src.Shared.Interfaces;

public interface IDepartmentReader
{
    Task<Guid?> GetUserDepartmentIdAsync(
        Guid userId,
        CancellationToken cancellationToken);
}
