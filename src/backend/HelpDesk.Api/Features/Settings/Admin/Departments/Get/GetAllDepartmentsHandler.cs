using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Departments.Get;

public sealed class GetAllDepartmentsHandler(
    IUserContext userContext,
    IUserReader userReader,
    ILogger<GetAllDepartmentsHandler> logger)
        : IQueryHandler<GetAllDepartmentsResponse>
{
    public async Task<GetAllDepartmentsResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = userContext.UserId;

        var departments = await userReader
            .GetAllActiveDepartmentsAsync(
                cancellationToken);

        logger.LogInformation("All departments retrieved successfully by user: {userId}",
            userId);

        return new GetAllDepartmentsResponse(departments);
    }
}
