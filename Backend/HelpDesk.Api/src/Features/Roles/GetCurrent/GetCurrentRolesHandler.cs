using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Roles.GetCurrent;

public sealed class GetCurrentRolesHandler
    : IQueryHandler<CurrentRolesResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetCurrentRolesHandler> _logger;

    public GetCurrentRolesHandler(
        IUserProvider userProvider,
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetCurrentRolesHandler> logger)
    {
        _userProvider = userProvider;
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<CurrentRolesResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        // Self-service

        var userId = _userContext.GuidUserId;

        // No need for "ur.RemovedAt == null"
        // it's already in the global filter

        var roles = await _dbContext.UserRoles
            .Where(ur => ur.UserId == userId)
            .Select(ur => ur.Role.Name)
            .ToListAsync(cancellationToken);



        return new CurrentRolesResponse(
            Roles: roles!);
    }
}
