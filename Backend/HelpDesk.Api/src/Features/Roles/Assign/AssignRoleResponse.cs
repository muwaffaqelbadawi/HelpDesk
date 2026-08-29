using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Roles.Assign;

public sealed record AssignRoleResponse(
    UserAccountData UserAccountData);