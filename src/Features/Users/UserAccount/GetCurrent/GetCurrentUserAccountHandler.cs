using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.UserAccount.GetCurrent;

public sealed class GetCurrentUserAccountHandler :
    IQueryHandler<CurrentUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetCurrentUserAccountHandler> _logger;

    public GetCurrentUserAccountHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetCurrentUserAccountHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<CurrentUserAccountResponse> HandleAsync(
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var user = await _dbContext.Users
            .Where(u => u.Id == userId)
            .SelectUserAccount()
            .SingleOrDefaultAsync(cancellationToken)
                ?? throw new UserNotFoundException($"User {userId} was not found.");

        return new CurrentUserAccountResponse(user);
    }
}
