using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.GetCurrent;

public sealed class GetCurrentUserHandler :
    IQueryHandler<CurrentUserResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetCurrentUserHandler> _logger;

    public GetCurrentUserHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetCurrentUserHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<CurrentUserResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service

        var userId = _userContext.GuidUserId;

        var user = await _dbContext.Users
            .Where(u => u.Id == userId)
            .Select(u => new
            {
                u.Id,
                u.UserName,
                u.Email,
                Roles = u.UserRoles
                    .Where(ur => ur.RemovedAt == null)
                    .Select(ur => ur.Role.Name)
                    .ToList(),
                Employee = u.Employee == null
                    ? null
                    : new
                    {
                        u.Employee.FullEnName,
                        u.Employee.FullArName,
                        u.Employee.RowVersion
                    }
            })
            .FirstOrDefaultAsync(cancellationToken);

        // Check for user data
        if (user is null)
        {
            throw new UserNotFoundException("Authenticated user not found.");
        }

        // Check for user name and email
        if (string.IsNullOrWhiteSpace(user.UserName) || string.IsNullOrWhiteSpace(user.Email))
        {
            throw new ValidationException(new()
            {
                ["username"] =
                [
                    $"User {user.Id} is missing required profile information."
                ],
                ["email"] =
                [
                    $"User {user.Id} is missing required profile information."
                ]
            });
        }

        // Return local time and user data
        return new CurrentUserResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion),
            Roles: user.Roles!);
    }
}
