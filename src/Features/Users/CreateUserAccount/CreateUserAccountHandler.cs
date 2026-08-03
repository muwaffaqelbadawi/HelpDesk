using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Users.CreateUserAccount;

public sealed class CreateUserAccountHandler :
    ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly AppDbContext _dbContext;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITemporaryPasswordGenerator passwordGenerator,
        AppDbContext dbContext,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userProvider = userProvider;
        _userManager = userManager;
        _passwordGenerator = passwordGenerator;
        _dbContext = dbContext;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<CreateUserAccountResponse> HandleAsync(
        CreateUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve currentUser with ID
        var currentUser = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Generate employee number
        var employeeNumber = await _numberingService
            .GetNextEmployeeNumberValueAsync(cancellationToken);

        // Create a new employee
        var employee = new Employee
        {
            Id = Guid.NewGuid(),
            FullEnName = command.FullEnName,
            FullArName = command.FullArName,
            Number = employeeNumber,
            StatusId = EmployeeStatusIds.Active,
            CreatedById = currentUser.Id,
            CreatedAt = _dateTimeService.UtcNow,

            //IsDeleted = false // HasDefaultValue(false) (Global flag)
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
            CreatedById = currentUser.Id,
            CreatedAt = _dateTimeService.UtcNow,

            //IsDeleted = false // HasDefaultValue(false) (Global flag)
        };

        // Generate a temp password
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

        _logger.LogInformation(
            "User {UserName} created successfully with temporary password",
            command.UserName);

        return new CreateUserAccountResponse(
            Id: user.Id,
            FullEnName: employee.FullEnName,
            UserName: user.UserName,
            Email: user.Email,
            Password: tempPassword,
            CreatedAt: _dateTimeService.UtcNow);
    }
}
