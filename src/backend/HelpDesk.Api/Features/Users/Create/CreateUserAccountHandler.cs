using HelpDesk.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Users.Create;

public sealed class CreateUserAccountHandler
    : ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        ITemporaryPasswordGenerator passwordGenerator,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IDomainEventDispatcher dispatcher,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _passwordGenerator = passwordGenerator;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<CreateUserAccountResponse> HandleAsync(
        CreateUserAccountCommand command,
        CancellationToken cancellationToken)
    {
        // admin-initiated
        var currentUserId = _userContext.GuidUserId;

        // Numbering service
        var employeeNumber = await _numberingService.GetNextEmployeeNumberAsync(
            cancellationToken);

        var now = _dateTimeService.UtcNow;

        // Create a new employee
        var employee = new Employee
        {
            Id = Guid.NewGuid(),
            Number = employeeNumber,
            FullEnName = command.FullEnName,
            FullArName = command.FullArName,
            CreatedById = currentUserId,
            CreatedAt = now,
        };

        // Create a new user
        var user = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            Employee = employee,
            StatusId = UserStatusIds.Active,
            MustResetPassword = true,
            CreatedById = currentUserId,
            CreatedAt = now,
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

        // Successful log
        _logger.LogInformation("User {user} created successfully",
            user.Id);

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new UserAccountCreatedEvent(
                User: user,
                OccurredAt: now,
                TempPassword: tempPassword),
            cancellationToken: cancellationToken);

        return new CreateUserAccountResponse(userAccountData);
    }
}
