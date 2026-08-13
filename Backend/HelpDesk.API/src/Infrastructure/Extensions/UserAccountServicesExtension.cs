using HelpDesk.src.Features.Users.UserAccount.Create;
using HelpDesk.src.Features.Users.UserAccount.Delete;
using HelpDesk.src.Features.Users.UserAccount.GetAll;
using HelpDesk.src.Features.Users.UserAccount.GetById;
using HelpDesk.src.Features.Users.UserAccount.GetCurrent;
using HelpDesk.src.Features.Users.UserAccount.Update;
using HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Data;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserAccountServicesExtension
{
    public static IServiceCollection AddUserServices(
        this IServiceCollection services)
    {
        // GetAll
        services.AddScoped<IQueryHandler<PagedQuery, PagedResult<UserAccountData>>, GetUsersAccountHandler>();

        // GetById
        services.AddScoped<IQueryHandler<GetByIdUserAccountQuery, GetByIdUserAccountResponse>, GetByIdUserAccountHandler>();

        // GetCurrent
        services.AddScoped<IQueryHandler<CurrentUserAccountResponse>, GetCurrentUserAccountHandler>();

        // Create
        services.AddScoped<ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>, CreateUserAccountHandler>();

        // Update
        services.AddScoped<ICommandHandler<UpdateUserAccountCommand, UpdateUserAccountResponse>, UpdateUserAccountHandler>();

        // UpdateCurrent
        services.AddScoped<ICommandHandler<UpdateCurrentUserAccountCommand, UpdateCurrentUserAccountResponse>, UpdateCurrentUserAccountHandler>();

        // Delete
        services.AddScoped<ICommandHandler<DeleteUserAccountCommand>, DeleteUserAccountHandler>();

        // UserRepository
        services.AddScoped<IUserRepository, UserRepository>();

        // UserReader
        services.AddScoped<IUserReader, UserReader>();


        return services;
    }
}
