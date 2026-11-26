using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Roles.GetAll;

public sealed class GetAllUserRolesHandler(
    IRolesReader roleReader,
    ILogger<GetAllUserRolesHandler> logger)
        : IQueryHandler<GetAllUserRolesQuery, GetAllUserRolesResponse>
{
    public async Task<GetAllUserRolesResponse> HandleAsync(
        GetAllUserRolesQuery query,
        CancellationToken cancellationToken)
    {
        var userId = query.UserId;

        var roles = await roleReader.GetUserRoleAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} roles retrieved",
            userId);

        return new GetAllUserRolesResponse(roles);
    }
}
