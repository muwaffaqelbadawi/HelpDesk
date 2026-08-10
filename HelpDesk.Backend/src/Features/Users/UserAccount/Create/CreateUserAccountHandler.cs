using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountHandler :
    ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly AppDbContext _dbContext;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly IBackgroundTaskQueue _taskQueue;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        AppDbContext dbContext,
        ITemporaryPasswordGenerator passwordGenerator,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IBackgroundTaskQueue taskQueue,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userManager = userManager;
        _passwordGenerator = passwordGenerator;
        _dbContext = dbContext;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _taskQueue = taskQueue;
        _logger = logger;
    }

    public async Task<CreateUserAccountResponse> HandleAsync(
        CreateUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // admin
        var currentUserId = _userContext.GuidUserId;

        var employeeNumber = await _numberingService.GetNextNumberAsync(
            NumberType.Employee,
            cancellationToken);

        // Create a new employee
        var employee = new Employee
        {
            Id = Guid.NewGuid(),
            FullEnName = command.FullEnName,
            FullArName = command.FullArName,
            Number = employeeNumber,
            StatusId = EmployeeStatusIds.Active,
            CreatedById = currentUserId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        // Create a new user
        var user = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            EmployeeId = employee.Id,
            StatusId = UserStatusIds.Active,
            LastPasswordChangedAt = null,
            MustChangePassword = true,
            CreatedById = currentUserId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        var tempPassword = _passwordGenerator.Generate();

        // Transaction wraps BOTH creations
        using var transaction = await _dbContext.Database.BeginTransactionAsync(cancellationToken);

        try
        {
            // 1- Add and save employee
            _dbContext.Employees.Add(employee);
            await _dbContext.SaveChangesAsync(cancellationToken);

            // 2. Create user (uses employee.Id now that it's saved)
            var userResult = await _userManager.CreateAsync(user, tempPassword);

            // Check if the user creation succeed
            if (!userResult.Succeeded)
            {
                _logger.LogWarning(
                    "Failed to create user {UserName}. Errors: {Errors}",
                    command.UserName,
                    string.Join(", ", userResult.Errors.Select(e => e.Description)));

                throw new InvalidOperationException(
                    string.Join(", ", userResult.Errors.Select(e => e.Description)));
            }

            // Commit all transactions
            await transaction.CommitAsync(cancellationToken);
        }
        catch
        {
            await transaction.RollbackAsync(cancellationToken);
            throw;
        }

        _logger.LogInformation("User {user} created successfully with temporary password", user.Id);

        var userAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == user.Id)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);

        var userId = userAccountData.UserId;
        var userName = userAccountData.UserName;
        var email = userAccountData.Email;
        var fullEnName = userAccountData.Employee!.FullEnName;

        await _taskQueue.QueueBackgroundWorkItemAsync(async (services, cancellationToken) =>
        {
            cancellationToken.ThrowIfCancellationRequested();

            var emailSender = services.GetRequiredService<IEmailService>();

            await emailSender.SendWelcomeEmailAsync(
                userName,
                fullEnName,
                email,
                tempPassword,
                cancellationToken);
        }, cancellationToken);

        return new CreateUserAccountResponse(userAccountData);
    }
}
