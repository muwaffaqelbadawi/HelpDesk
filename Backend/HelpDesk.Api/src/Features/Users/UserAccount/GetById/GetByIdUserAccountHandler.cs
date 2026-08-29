using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.UserAccount.GetById;

public sealed class GetByIdUserAccountHandler :
    IQueryHandler<GetByIdUserAccountQuery, GetByIdUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly ILogger<GetByIdUserAccountHandler> _logger;

    public GetByIdUserAccountHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        ILogger<GetByIdUserAccountHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _logger = logger;
    }

    public async Task<GetByIdUserAccountResponse> HandleAsync(
        GetByIdUserAccountQuery query,
        CancellationToken cancellationToken)
    {
        var user = await _dbContext.Users
            .Where(u => u.Id == query.UserId)
            .SelectUserAccount()
            .SingleOrDefaultAsync(cancellationToken)
                ?? throw new UserNotFoundException(query.UserId);

        return new GetByIdUserAccountResponse(user);
    }
}
