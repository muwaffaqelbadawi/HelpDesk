using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
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
    private readonly IQueueEmailService _queueEmailService;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        ITemporaryPasswordGenerator passwordGenerator,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IQueueEmailService queueEmailService,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userContext = userContext;
        _passwordGenerator = passwordGenerator;
        _userRepository = userRepository;
        _userReader = userReader;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _queueEmailService = queueEmailService;
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
            user: user,
            employee: employee,
            tempPassword: tempPassword,
            cancellationToken: cancellationToken);

        // User reader
        var userAccountData = await _userReader.GetByIdAsync(
            userId: user.Id,
            cancellationToken: cancellationToken);

        // Success log
        _logger.LogInformation("User {user} created successfully with temporary password", user.Id);

        await _queueEmailService.WelcomeEmail(
            userName: user.UserName,
            recipientEmail: user.Email,
            fullName: userAccountData.Employee!.FullEnName,
            tempPassword: tempPassword,
            cancellationToken: cancellationToken);

        return new CreateUserAccountResponse(userAccountData);
    }
}
