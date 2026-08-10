using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Users.UserAccount.Delete;

public sealed class DeleteUserAccountHandler :
    ICommandHandler<DeleteUserAccountCommand>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteUserAccountHandler> _logger;

    public DeleteUserAccountHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<DeleteUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // soft-delete user account

        // admin
        var currentUserId = _userContext.GuidUserId;

        // user
        var userId = command.UserId;

        // lookup user
        var user = await _userManager.FindByIdAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var now = _dateTimeService.UtcNow;

        // Soft-delete user
        user.IsDeleted = true;
        user.StatusId = UserStatusIds.Deleted;
        user.DeletedById = currentUserId;
        user.DeletedAt = now;

        // Check for EmployeeId
        if (user.EmployeeId.HasValue)
        {
            // lookup employee
            var employee = await _dbContext.Employees.FindAsync(
                new object[] { user.EmployeeId }, cancellationToken);

            // Ensure an employee with ID user.EmployeeId exists
            if (employee is not null)
            {
                // Soft-delete the employee
                employee.IsDeleted = true;
                employee.StatusId = EmployeeStatusIds.Deleted;
                employee.DeletedById = currentUserId;
                employee.DeletedAt = now;
            }
        }

        // Atomic transaction (ensure both calls success together or fail together)
        using var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            await _userManager.UpdateAsync(user);
            await _dbContext.SaveChangesAsync(cancellationToken);
            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }
    }
}
