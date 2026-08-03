using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UpdateUserProfile;

public sealed class UpdateUserProfileHandler :
    ICommandHandler<UpdateUseProfilerCommand, UpdateUserProfileResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<UpdateUserProfileHandler> _logger;

    public UpdateUserProfileHandler(

        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        IDateTimeService dateTimeService,
        ILogger<UpdateUserProfileHandler> logger)
    {
        _userProvider = userProvider;
        _userManager = userManager;
        _dbContext = dbContext;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<UpdateUserProfileResponse> HandleAsync(
        UpdateUseProfilerCommand command,
        CancellationToken cancellationToken)
    {
        // Self-service

        // Get the authenticated user
        var user = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        var utcNow = _dateTimeService.UtcNow;

        await using var transaction = await _dbContext.Database
            .BeginTransactionAsync(cancellationToken);

        try
        {
            // Update Employee (if linked)
            if (user.EmployeeId.HasValue)
            {
                var employeeRows = await _dbContext.Employees
                    .Where(e => e.Id == user.EmployeeId
                         && e.RowVersion == command.ExpectedRowVersion
                         && e.CreatedById == user.Id)
                    .ExecuteUpdateAsync(setters => setters
                    .SetProperty(e => e.FullEnName, command.FullEnName)
                    .SetProperty(e => e.FullArName, command.FullArName)
                    .SetProperty(e => e.UpdatedAt, utcNow)
                    .SetProperty(e => e.UpdatedById, user.Id),
                    cancellationToken);

                if (employeeRows == 0)
                {
                    throw new ConcurrencyException("Employee was modified by another user.");
                }
            }

            // Update user
            if (command.UserName is not null)
            {
                user.UserName = command.UserName;
            }

            if (command.Email is not null)
            {
                user.Email = command.Email;
            }

            // Update audit fields (for user)
            user.UpdatedAt = utcNow;
            user.UpdatedById = user.Id;

            var result = await _userManager.UpdateAsync(user);

            // Check result
            if (!result.Succeeded)
            {
                _logger.LogWarning(
                "Failed to create user {UserName}. Errors: {Errors}",
                command.UserName,
                string.Join(", ", result.Errors.Select(e => e.Description)));

                throw new ValidationException(new()
                {
                    ["username"] =
                        [
                            result.Errors.First().Description
                        ],
                });
            }

            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }

        // Optionally fetch new RowVersion for employee (if needed)
        byte[]? newRowVersion = null;

        if (user.EmployeeId.HasValue)
        {
            newRowVersion = await _dbContext.Employees
                .Where(e => e.Id == user.EmployeeId.Value)
                .Select(e => e.RowVersion)
                .SingleAsync(cancellationToken);
        }

        return new UpdateUserProfileResponse(newRowVersion);
    }
}
