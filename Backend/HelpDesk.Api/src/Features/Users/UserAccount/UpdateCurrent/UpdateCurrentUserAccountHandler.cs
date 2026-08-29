using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.UserAccount.UpdateCurrent;

public sealed class UpdateCurrentUserAccountHandler
    : ICommandHandler<UpdateCurrentUserAccountCommand, UpdateCurrentUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<UpdateCurrentUserAccountHandler> _logger;

    public UpdateCurrentUserAccountHandler(
        IUserContext userContext,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<UpdateCurrentUserAccountHandler> logger)
    {
        _userContext = userContext;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<UpdateCurrentUserAccountResponse> HandleAsync(
        UpdateCurrentUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service


        var userId = _userContext.GuidUserId;

        var now = _dateTimeService.UtcNow;

        var rows = await _dbContext.Users
            .Where(u => u.Id == userId
                && u.Employee != null
                && u.RowVersion == command.UserRowVersion
                && u.Employee.RowVersion == command.EmployeeRowVersion
                && u.CreatedById == userId)
            .ExecuteUpdateAsync(setters => setters
                .SetProperty(u => u.UserName, command.UserName)
                .SetProperty(u => u.Email, command.Email)
                .SetProperty(u => u.Employee!.FullEnName, command.FullEnName)
                .SetProperty(u => u.Employee!.FullArName, command.FullArName)
                .SetProperty(u => u.UpdatedById, userId)
                .SetProperty(u => u.UpdatedAt, now),
            cancellationToken);

        if (rows == 0)
        {
            throw new ConcurrencyException($"The user account associated with user {userId} was modified or deleted by another user.");
        }

        var rowVersions = await _dbContext.Users
            .Where(u => u.Id == userId)
            .Select(u => new RowVersionData
            {
                UserRowVersion = u.RowVersion,
                EmployeeRowVersion = u.Employee!.RowVersion
            })
            .SingleAsync(cancellationToken);

        var userRowVersion = rowVersions.UserRowVersion;
        var employeeRowVersion = rowVersions.EmployeeRowVersion;

        _logger.LogInformation("The user account associate with user {userId} was updated successfully", userId);

        return new UpdateCurrentUserAccountResponse(
            UserRowVersion: userRowVersion,
            EmployeeRowVersion: employeeRowVersion!);
    }
}
