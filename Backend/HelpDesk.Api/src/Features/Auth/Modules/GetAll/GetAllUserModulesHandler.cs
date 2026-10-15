using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.Modules.GetAll;

public sealed class GetAllUserModulesHandler(
    IModulesReader modulesReader,
    ILogger<GetAllUserModulesHandler> logger)
        : IQueryHandler<GetAllUserModulesQuery, GetAllUserModulesResponse>
{
    public async Task<GetAllUserModulesResponse> HandleAsync(
        GetAllUserModulesQuery query,
        CancellationToken cancellationToken)
    {
        var userId = query.UserId;

        var modules = await modulesReader.GetUserModulesAsync(
            userId,
            cancellationToken);

        // Successful log
        logger.LogInformation("User {user} modules retrieved successfully",
            userId);

        return new GetAllUserModulesResponse(modules);
    }
}
