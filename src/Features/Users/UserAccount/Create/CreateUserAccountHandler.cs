using HelpDesk.src.Infrastructure.Database.Data.Business.BusinessSchemas;
using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
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
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly AppDbContext _dbContext;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserContext userContext,
        UserManager<ApplicationUser> userManager,
        ITemporaryPasswordGenerator passwordGenerator,
        AppDbContext dbContext,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userContext = userContext;
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
        // Admin-initiated


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

        _logger.LogInformation("User {user} created successfully with temporary password", user.Id);

        var userData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == user.Id)
            .SelectUserAccount()
            .SingleAsync(cancellationToken);

        return new CreateUserAccountResponse(userData);
    }
}
