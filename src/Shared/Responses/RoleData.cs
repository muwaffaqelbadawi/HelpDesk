namespace HelpDesk.src.Shared.Responses;

public sealed record RoleData(
    Guid Id,
    string Name,
    string Code,
    bool IsActive,
    int SortOrder);
