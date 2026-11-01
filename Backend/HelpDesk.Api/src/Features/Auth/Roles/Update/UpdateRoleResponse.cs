using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Features.Auth.Roles.Update;

public sealed record class UpdateRoleResponse(
    UserAccountData UserAccountData);
