namespace HelpDesk.src.Shared.Interfaces;

public interface IDepartmentRules
{
    Task<bool> IsActiveAsync(
        Guid departmentId,
        CancellationToken cancellationToken);
}
