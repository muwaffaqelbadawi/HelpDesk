using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.Delete;

public sealed class DeleteUserHandler :
    ICommandHandler<DeleteUserCommand>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly ILookupService _lookup;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<DeleteUserHandler> _logger;

    public DeleteUserHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        ILookupService lookup,
        IDateTimeService dateTimeService,
        ILogger<DeleteUserHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _userManager = userManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
        _lookup = lookup;
    }

    public async Task HandleAsync(
        DeleteUserCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve the admin with ID
        var currentUser = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        //// The user intended to be deleted
        //var user = await _userManager.FindByIdAsync(command.UserId)
        //    ?? throw new UserNotFoundException(command.UserId);


        // Fetch the target user's ID and linked EmployeeId (lightweight check)
        var user = await _dbContext.Users
            .Where(u => u.Id == command.UserId)
            .Select(u => new { u.Id, u.EmployeeId, u.IsDeleted })
            .FirstOrDefaultAsync(cancellationToken);

        if (user is null)
        {
            throw new UserNotFoundException("User not found.");
        }

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
                    .SetProperty(e => e.DeletedById, currentUser.Id)
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
                .SetProperty(u => u.DeletedById, currentUser.Id),
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
