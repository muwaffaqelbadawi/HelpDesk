using HelpDesk.src.Features.Users.UserAccount.Delete;
using HelpDesk.src.Features.Users.UserAccount.GetCurrent;
using HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Queries;
using HelpDesk.src.Shared.Responses.Data;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class ScrutorTestsMiddlewareExtension
{
    public static WebApplication UseScrutorTestsServices(
        this WebApplication app)
    {
        // Test contracts only

        using var scope = app.Services.CreateScope();

        scope.ServiceProvider
            .GetRequiredService<
                IQueryHandler<GetUsersQuery, PagedResult<UserAccountData>>>();

        scope.ServiceProvider
            .GetRequiredService<
                IQueryHandler<CurrentUserAccountResponse>>();



        scope.ServiceProvider
            .GetRequiredService<
                ICommandHandler<UpdateCurrentUserAccountCommand, UpdateCurrentUserAccountResponse>>();



        scope.ServiceProvider
            .GetRequiredService<
                ICommandHandler<DeleteUserAccountCommand>>();


        return app;
    }
}