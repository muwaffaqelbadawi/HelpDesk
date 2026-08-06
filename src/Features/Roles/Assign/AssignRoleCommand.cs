namespace HelpDesk.src.Features.Roles.Assign;

public sealed record AssignRoleCommand(
    string UserId,
    string Role);
