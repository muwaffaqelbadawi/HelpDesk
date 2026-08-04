using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.Delete;

public sealed class DeleteUserHandler :
    ICommandHandler<DeleteUserCommand>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IUserLookupService _userLookup;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteUserHandler> _logger;

    public DeleteUserHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        IUserLookupService userLookup,
        IDateTimeService dateTimeService,
        ILogger<DeleteUserHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _userLookup = userLookup;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteUserCommand command,
        CancellationToken cancellationToken)
    {
        var currentUserId = _userContext.GuidUserId;

        var user = await _dbContext.Users
            .Where(u => u.Id == command.UserId)
            .Select(u => new { u.Id, u.EmployeeId, u.IsDeleted })
            .FirstOrDefaultAsync(cancellationToken)
                ?? throw new UserNotFoundException("User not found.");

        if (user.IsDeleted)
        {
            throw new ConflictException("User is already deleted.");
        }

        // utc now
        var now = _dateTimeService.UtcNow;

        // Transaction
        await using var transaction = await _dbContext.Database
            .BeginTransactionAsync(cancellationToken);

        try
        {
            // Update Employee (if linked)
            if (user.EmployeeId.
                HasValue)
            {
                var employeeRows = await _dbContext.Employees
                    .Where(e => e.Id == user.EmployeeId.Value
                        && !e.IsDeleted
                        && e.RowVersion == command.ExpectedRowVersion
                        && e.CreatedById == user.Id)
                    .ExecuteUpdateAsync(setters => setters
                    .SetProperty(e => e.IsDeleted, true)
                    .SetProperty(e => e.StatusId, EmployeeStatusIds.Deleted) // optional
                    .SetProperty(e => e.DeletedById, currentUserId)
                    .SetProperty(e => e.DeletedAt, now),
                cancellationToken);

                if (employeeRows == 0)
                {
                    throw new ConcurrencyException("Employee was already deleted or modified.");
                }
            }

            // Soft-delete User
            var userRows = await _dbContext.Users
                .Where(u => u.Id == command.UserId && !u.IsDeleted)
                .ExecuteUpdateAsync(setters => setters
                    .SetProperty(u => u.IsDeleted, true)
                    .SetProperty(e => e.StatusId, EmployeeStatusIds.Deleted) // optional
                    .SetProperty(u => u.DeletedAt, now)
                    .SetProperty(u => u.DeletedById, currentUserId),
                cancellationToken);

            if (userRows == 0)
            {
                throw new ConflictException("User was already deleted or modified.");
            }

            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }
}
