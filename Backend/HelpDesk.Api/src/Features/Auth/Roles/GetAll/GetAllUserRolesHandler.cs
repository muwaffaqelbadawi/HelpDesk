using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Roles.GetAll;

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

        var roles = await roleReader.GetUserRolesAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} roles retrieved",
            userId);

        return new GetAllUserRolesResponse(roles);
    }
}
