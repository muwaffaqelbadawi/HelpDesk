using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Modules.GetMy;

public sealed class GetMyModulesHandler(
    IUserContext userContext,
    IModulesReader modulesReader,
    ILogger<GetMyModulesHandler> logger)
        : IQueryHandler<GetMyModulesResponse>
{
    public async Task<GetMyModulesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;

        var modules = await modulesReader.GetUserModulesAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} modules retrieved successfully",
            userId);

        return new GetMyModulesResponse(modules);
    }
}
