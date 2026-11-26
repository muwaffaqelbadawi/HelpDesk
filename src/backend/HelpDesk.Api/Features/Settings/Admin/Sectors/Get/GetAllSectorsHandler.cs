using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Sectors.Get;

public sealed class GetAllSectorsHandler(
    IUserContext userContext,
    IUserReader userReader,
    ILogger<GetAllSectorsHandler> logger)
        : IQueryHandler<GetAllSectorsResponse>
{
    public async Task<GetAllSectorsResponse> HandleAsync(

        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var sectors = await userReader
            .GetAllActiveSectorsAsync(
                cancellationToken);

        logger.LogInformation("All sectors retrieved successfully by user: {userId}",
            userId);

        return new GetAllSectorsResponse(sectors);
    }
}
