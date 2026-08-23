using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountHandler :
    ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly IBackgroundTaskQueue _taskQueue;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        ITemporaryPasswordGenerator passwordGenerator,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IBackgroundTaskQueue taskQueue,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userContext = userContext;
        _passwordGenerator = passwordGenerator;
        _userRepository = userRepository;
        _userReader = userReader;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _taskQueue = taskQueue;
        _logger = logger;
    }

    public async Task<CreateUserAccountResponse> HandleAsync(
        CreateUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // admin-initiated
        var currentUserId = _userContext.GuidUserId;

        // Numbering service
        var employeeNumber = await _numberingService.GetNextNumberAsync(
            NumberType.Employee,
            cancellationToken);

        // Create a new employee
        var employee = new Employee
        {
            Id = Guid.NewGuid(),
            Number = employeeNumber,
            FullEnName = command.FullEnName,
            FullArName = command.FullArName,
            StatusId = EmployeeStatusIds.Active,
            CreatedById = currentUserId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        // Create a new user
        var user = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            Employee = employee,
            StatusId = UserStatusIds.Active,
            LastPasswordChangedAt = null,
            MustChangePassword = true,
            CreatedById = currentUserId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        var tempPassword = _passwordGenerator.Generate();

        // User repo
        await _userRepository.AddAsync(
            user,
            employee,
            tempPassword,
            cancellationToken);

        // User reader
        var userAccountData = await _userReader.GetByIdAsync(
            user.Id,
            cancellationToken);

        // Success log
        _logger.LogInformation("User {user} created successfully with temporary password", user.Id);









        // Domain events and subscribers

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
