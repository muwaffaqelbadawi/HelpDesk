using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Roles.GetAll;

public sealed record class RolesResponse(
    IReadOnlyCollection<RoleData> Roles);
