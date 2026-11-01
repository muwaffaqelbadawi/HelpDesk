using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed class SuperadminHandler
    : ICommandHandler<SuperadminCommand, SuperadminResponse>
{
    private readonly ISuperadminRepository _superadminRepository;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly IDateTimeService _dateTimeService;
    private readonly ISuperadminReader _superadminReader;
    private readonly IUserReader _userReader;
    private readonly IDomainEventDispatcher _dispatcher;
    private readonly ILogger<SuperadminHandler> _logger;

    public SuperadminHandler(
        ISuperadminRepository superadminRepository,
        ITemporaryPasswordGenerator passwordGenerator,
        IDateTimeService dateTimeService,
        ISuperadminReader superadminReader,
        IUserReader userReader,
        IDomainEventDispatcher dispatcher,
        ILogger<SuperadminHandler> logger)
    {
        _superadminRepository = superadminRepository;
        _passwordGenerator = passwordGenerator;
        _dateTimeService = dateTimeService;
        _superadminReader = superadminReader;
        _userReader = userReader;
        _dispatcher = dispatcher;
        _logger = logger;
    }

    public async Task<SuperadminResponse> HandleAsync(
       SuperadminCommand command,
       CancellationToken cancellationToken)
    {
        var existingSuperadmin = await _superadminReader
            .CheckExistingSuperadminAsync(cancellationToken);

        // Ensure this is the very first user
        if (existingSuperadmin is not null)
        {
            _logger.LogInformation(
                "Bootstrap superadmin already exists. Skipping seeding.");

            return new SuperadminResponse(
                SuperadminData: new SuperadminAccountData
                {
                    UserId = existingSuperadmin.Id,
                    UserName = existingSuperadmin.UserName!,
                    Email = existingSuperadmin.Email!,
                    Roles = ["SuperAdmin"]
                });
        }

        // now
        var now = _dateTimeService.UtcNow;

        // Create superadmin object (in memory)
        var superadmin = new ApplicationUser
        {
            Id = Guid.NewGuid(),
            UserName = command.UserName,
            Email = command.Email,
            StatusId = UserStatusIds.Active,
            MustResetPassword = true,
            LastPasswordChangedAt = null,
            CreatedById = null,
            CreatedAt = now,
        };

        // Generate temp password (in memory)
        var tempPassword = _passwordGenerator.Generate();

        // Superadmin role ID
        var roleId = command.RoleId;

        // Create Superadmin role to superadmin account
        // Create a new relationship between superadmin and
        // Superadmin role object (in memory)
        var superadminRoleEntity = new ApplicationUserRole
        {
            UserId = superadmin.Id,
            RoleId = roleId,
            AssignedAt = now,
            AssignedById = null
        };

        // Superadmin repo
        await _superadminRepository.AddAsync(
            superadmin: superadmin,
            tempPassword: tempPassword,
            superadminRoleEntity: superadminRoleEntity,
            cancellationToken: cancellationToken);

        // Success Role log
        _logger.LogInformation(
            "The role {Role} is assigned to user {User}",
            command.RoleId,
            superadmin.Id);

        // Get Superadmin
        var superadminAccountData = await _superadminReader.GetSuperadminAsync(
            userId: superadmin.Id,
            cancellationToken: cancellationToken);

        // Successful log
        _logger.LogInformation("Superadmin {superadmin} was created successfully",
            superadmin.Id);

        // Retrieve current superadmin from database for domain event
        var user = await _userReader.GetUserAsync(superadmin.Id.ToString())
            ?? throw new AuthenticationRequiredException();

        // Domain event
        await _dispatcher.DispatchAsync(
            @event: new SuperadminCreatedEvent(
                User: user,
                OccurredAt: now,
                TempPassword: tempPassword),
            cancellationToken: cancellationToken);

        return new SuperadminResponse(superadminAccountData);
    }
}
