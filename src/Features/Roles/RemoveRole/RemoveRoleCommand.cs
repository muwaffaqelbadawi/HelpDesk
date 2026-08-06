namespace HelpDesk.src.Features.Roles.RemoveRole;

public sealed record class RemoveRoleCommand(
    string UserId,
    Guid RoleId);