namespace HelpDesk.src.Shared.Responses.Data;

public sealed record RoleData(
    Guid Id,
    string Name,
    string Code,
    bool IsActive,
    int SortOrder);
