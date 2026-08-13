using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Features.Roles.GetAll;

public sealed record class RolesResponse(
    IReadOnlyCollection<RoleData> Roles);
