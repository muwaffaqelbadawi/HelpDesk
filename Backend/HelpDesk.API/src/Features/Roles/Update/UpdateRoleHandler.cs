using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Roles.Update;

public sealed class UpdateRoleHandler
    : ICommandHandler<UpdateRoleCommand, UpdateRoleResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<UpdateRoleHandler> _logger;

    public UpdateRoleHandler(
        IUserContext userContext,
        AppDbContext context,
        IDateTimeService dateTimeService,
        ILogger<UpdateRoleHandler> logger)
    {
        _userContext = userContext;
        _dbContext = context;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public Task<UpdateRoleResponse> HandleAsync(
        UpdateRoleCommand command,
        CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
