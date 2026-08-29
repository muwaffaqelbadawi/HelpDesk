using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Roles.GetById;

public sealed class GetRoleByIdHandler
    : IQueryHandler<GetByIdRoleQuery, GetByIdRoleResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<GetRoleByIdHandler> _logger;

    public GetRoleByIdHandler(
        IUserContext userContext,
        AppDbContext context,
        IDateTimeService dateTimeService,
        ILogger<GetRoleByIdHandler> logger)
    {
        _userContext = userContext;
        _dbContext = context;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public Task<GetByIdRoleResponse> HandleAsync(
        GetByIdRoleQuery query,
        CancellationToken cancellationToken)
    {
        // List a specific user roles

        // Admin-initiated

        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;


        throw new NotImplementedException();
    }
}
