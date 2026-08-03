using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Responses;
using Microsoft.EntityFrameworkCore;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.GetById;

public sealed class GetByIdUserHandler :
    IQueryHandler<GetByIdUserQuery, GetByIdUserResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetByIdUserHandler> _logger;

    public GetByIdUserHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetByIdUserHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<GetByIdUserResponse> HandleAsync(
        GetByIdUserQuery query,
        CancellationToken cancellationToken)
    {
        // Resolve user ID from input
        var userId = _userContext.ToGuidId(query.UserId);

        var user = await _dbContext.Users
            .Where(u => u.Id == userId)
            .Select(u => new
            {
                u.Id,
                u.UserName,
                u.Email,
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

        return new GetByIdUserResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion));
    }
}
