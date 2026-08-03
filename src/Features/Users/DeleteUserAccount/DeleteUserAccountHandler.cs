using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using Microsoft.AspNetCore.Identity;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.DeleteUserAccount;

public sealed class DeleteUserAccountHandler :
    ICommandHandler<DeleteUserAccountCommand>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteUserAccountHandler> _logger;

    public DeleteUserAccountHandler(
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<DeleteUserAccountHandler> logger)
    {
        _userProvider = userProvider;
        _userManager = userManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task HandleAsync(
        DeleteUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve currentUser with ID
        var currentUser = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // lookup user
        var user = await _userManager.FindByIdAsync(command.UserId)
            ?? throw new UserNotFoundException(command.UserId);

        var now = _dateTimeService.UtcNow;

        // Soft-delete user
        user.IsDeleted = true;
        user.StatusId = UserStatusIds.Deleted;
        user.DeletedById = currentUser.Id;
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
                employee.DeletedById = currentUser.Id;
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
