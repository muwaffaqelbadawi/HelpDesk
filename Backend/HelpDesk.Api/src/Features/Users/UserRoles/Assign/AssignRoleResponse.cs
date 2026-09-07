using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Users.UserRoles.Assign;

public sealed record AssignRoleResponse(
    UserAccountData UserAccountData);