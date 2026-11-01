namespace HelpDesk.src.Shared.DataAccess.Dtos;

public sealed record RoleData(
    Guid Id,
    string Name,
    string Code,
    bool IsActive,
    int SortOrder);
