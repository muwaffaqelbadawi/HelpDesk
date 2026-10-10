using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Auth.Roles.Update;

public sealed record class UpdateRoleResponse(
    UserAccountData UserAccountData);
