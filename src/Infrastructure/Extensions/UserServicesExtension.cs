using HelpDesk.src.Features.Users.Create;
using HelpDesk.src.Features.Users.GetAll;
using HelpDesk.src.Features.Users.GetById;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Pagination;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class UserServicesExtension
{
    public static IServiceCollection AddUserServices(
        this IServiceCollection services)
    {
        // Get all users
        services.AddScoped<IQueryHandler<PagedQuery, PagedResult<GetUsersResponse>>, GetUsersHandler>();

        // Get user by ID
        services.AddScoped<IQueryHandler<GetByIdUserQuery, GetByIdUserResponse>, GetByIdUserHandler>();

        // Create user
        services.AddScoped<ICommandHandler<CreateUserCommand, CreateUserResponse>, CreateUserHandler>();

        return services;
    }
}
