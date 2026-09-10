using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.EmployeeStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountHandler :
    ICommandHandler<CreateUserAccountCommand, CreateUserAccountResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;


    private readonly IDepartmentRules _departmentRules;
    private readonly ISectorRules _sectorRules;
    private readonly ICountryRules _countryRules;




    private readonly IPhoneNumberRules _phoneNumberRules;
    private readonly INumberingService _numberingService;
    private readonly IDateTimeService _dateTimeService;
    private readonly IApplicationOptions _applicationOptions;
    private readonly IQueueEmailService _queueEmailService;
    private readonly ILogger<CreateUserAccountHandler> _logger;

    public CreateUserAccountHandler(
        IUserContext userContext,
        IUserRepository userRepository,
        IUserReader userReader,
        ITemporaryPasswordGenerator passwordGenerator,
        IDepartmentRules departmentRules,
        ISectorRules sectorRules,
        ICountryRules countryRules,
        IPhoneNumberRules phoneNumberRules,
        INumberingService numberingService,
        IDateTimeService dateTimeService,
        IApplicationOptions applicationOptions,
        IQueueEmailService queueEmailService,
        ILogger<CreateUserAccountHandler> logger)
    {
        _userContext = userContext;
        _userRepository = userRepository;
        _userReader = userReader;
        _passwordGenerator = passwordGenerator;
        _departmentRules = departmentRules;
        _sectorRules = sectorRules;
        _countryRules = countryRules;
        _phoneNumberRules = phoneNumberRules;
        _numberingService = numberingService;
        _dateTimeService = dateTimeService;
        _applicationOptions = applicationOptions;
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
            JobTitle = command.JobTitle,
            StatusId = EmployeeStatusIds.Active,
            CreatedById = currentUserId,
            CreatedAt = _dateTimeService.UtcNow,
        };

        // Validate department
        if (!await _departmentRules.IsActiveAsync(command.DepartmentId, cancellationToken))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["departmentId"] =
                    [
                        "The selected department is unavailable."
                    ],
                });
        }

        // Validate sector
        if (!await _sectorRules.IsActiveAsync(command.SectorId, cancellationToken))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["sectorId"] =
                    [
                        "The selected sector is unavailable."
                    ],
                });
        }

        // Validate country
        if (!await _countryRules.IsActiveAsync(command.CountryId, cancellationToken))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["countryId"] =
                    [
                        "The selected country is unavailable."
                    ],
                });
        }

        employee.DepartmentId = command.DepartmentId;
        employee.SectorId = command.SectorId;
        employee.CountryId = command.CountryId;

        // Create a new user
        var user = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            PhoneNumber = command.PhoneNumber,
            PhoneNumberConfirmed = false,
            Employee = employee,
            StatusId = UserStatusIds.Active,
            LastPasswordChangedAt = null,
            MustChangePassword = true,
            CreatedById = currentUserId,
            CreatedAt = _dateTimeService.UtcNow,
            TimeZone = _applicationOptions.DefaultTimeZone,
            PreferredLanguage = _applicationOptions.DefaultLanguage
        };

        // Validate phone number
        if (!_phoneNumberRules.IsValidPhoneNumber(command.PhoneNumber))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["phoneNumber"] =
                    [
                        "The entered number is invalid."
                    ],
                });
        }

        user.PhoneNumber = command.PhoneNumber;

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
        _logger.LogInformation("User {user} created successfully with temporary password",
            user.Id);

        var traceId = _userContext.TraceId;
        var correlationId = _userContext.CorrelationId;

        // Send welcome email
        await _queueEmailService.WelcomeEmail(
            userId: user.Id,
            userName: user.UserName,
            recipientEmail: user.Email,
            fullName: userAccountData.Employee!.FullEnName,
            tempPassword: tempPassword,
            traceId: traceId,
            correlationId: correlationId,
            cancellationToken: cancellationToken);

        _logger.LogInformation("Welcome email for user {user} queued successfully.",
            user.Id);

        return new CreateUserAccountResponse(
            UserAccountData: userAccountData);
    }
}
