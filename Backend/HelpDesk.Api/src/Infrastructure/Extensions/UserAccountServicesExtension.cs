using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Repositories;
using HelpDesk.src.Shared.Responses.Readers;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserAccountServicesExtension
{
    public static IServiceCollection AddUserServices(
        this IServiceCollection services)
    {
        // GetAll
        //services.AddScoped<IQueryHandler<GetUsersQuery, PagedResult<UserAccountData>>, GetUsersAccountHandler>();

        // GetById
        //services.AddScoped<IQueryHandler<GetByIdUserAccountQuery, GetByIdUserAccountResponse>, GetByIdUserAccountHandler>();

        // GetCurrent
        //services.AddScoped<IQueryHandler<CurrentUserAccountResponse>, GetCurrentUserAccountHandler>();

        // Create
        //services.AddScoped<ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>, CreateUserAccountHandler>();

        // Update
        //services.AddScoped<ICommandHandler<UpdateUserAccountCommand, UpdateUserAccountResponse>, UpdateUserAccountHandler>();

        // UpdateCurrent
        //services.AddScoped<ICommandHandler<UpdateCurrentUserAccountCommand, UpdateCurrentUserAccountResponse>, UpdateCurrentUserAccountHandler>();

        // Delete
        //services.AddScoped<ICommandHandler<DeleteUserAccountCommand>, DeleteUserAccountHandler>();







        // We will leave these explicit registered for now since they don't have common abstraction yet

        // UserRepository
        services.AddScoped<IUserRepository, UserRepository>();

        // UserReader
        services.AddScoped<IUserReader, UserReader>();


        return services;
    }
}
