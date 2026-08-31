using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.EmployeeStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Employees.Delete;

public sealed class DeleteEmployeeHandler :
    ICommandHandler<DeleteEmployeeCommand>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteEmployeeHandler> _logger;

    public DeleteEmployeeHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<DeleteEmployeeHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteEmployeeCommand command,
        CancellationToken cancellationToken)
    {
        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        var rows = await _dbContext.Employees
            .Where(e => e.Id == command.EmployeeId
                 && e.RowVersion == command.EmployeeRowVersion
                 && e.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(e => e.DeletedById, userId)
                .SetProperty(e => e.StatusId, EmployeeStatusIds.Deleted)
                .SetProperty(e => e.DeletedAt, now)
                .SetProperty(e => e.IsDeleted, true),
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException($"Employee {command.EmployeeId} was modified or deleted by another user.");
        }

        _logger.LogInformation("Employee {EmployeeId} was deleted successfully", command.EmployeeId);
    }
}
