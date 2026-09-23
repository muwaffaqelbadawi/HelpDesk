using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.Roles.Assign;

public sealed record AssignRoleResponse(
    UserAccountData UserAccountData);