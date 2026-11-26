using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Roles.GetMy;

public sealed class GetMyRolesHandler(
    IUserContext userContext,
    IRolesReader roleReader,
    ILogger<GetMyRolesHandler> logger)
        : IQueryHandler<GetMyRolesResponse>
{
    public async Task<GetMyRolesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;

        var roles = await roleReader.GetUserRoleAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} roles retrieved successfully",
            userId);

        return new GetMyRolesResponse(roles);
    }
}
