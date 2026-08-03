using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Employees.Delete;

public sealed class DeleteEmployeeHandler :
    ICommandHandler<DeleteEmployeeCommand>
{
    private readonly IUserProvider _userProvider;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;

    public DeleteEmployeeHandler(
        IUserProvider userProvider,
        AppDbContext dbContext,
        IDateTimeService dateTimeService)
    {
        _userProvider = userProvider;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
    }

    public async Task HandleAsync(
        DeleteEmployeeCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve user with ID
        var user = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Find the employee by EmployeeId
        var employee = await _dbContext.Employees
            .FindAsync(new object[] { command.EmployeeId }, cancellationToken)
            ?? throw new EmployeeNotFoundException(command.EmployeeId);

        // Update the employee properties
        employee.IsDeleted = true;
        employee.StatusId = EmployeeStatusIds.Deleted;
        employee.DeletedById = user.Id;
        employee.DeletedAt = _dateTimeService.UtcNow;

        // Save changes of the employee in the database
        await _dbContext.SaveChangesAsync(cancellationToken);
    }
}
