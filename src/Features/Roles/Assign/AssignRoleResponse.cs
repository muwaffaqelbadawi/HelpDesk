using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Roles.Assign;

public sealed record AssignRoleResponse(
    string RoleName,
    UserData UserData);