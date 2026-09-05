using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed class SuperadminHandler :
    ICommandHandler<SuperadminCommand, SuperadminResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly ISuperadminRepository _superadminRepository;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly IDateTimeService _dateTimeService;
    private readonly ISuperadminReader _superadminReader;
    private readonly IQueueEmailService _queueEmailService;
    private readonly ILogger<SuperadminHandler> _logger;

    public SuperadminHandler(
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        ISuperadminRepository superadminRepository,
        ITemporaryPasswordGenerator passwordGenerator,
        IDateTimeService dateTimeService,
        ISuperadminReader superadminReader,
        IQueueEmailService queueEmailService,
        ILogger<SuperadminHandler> logger)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _superadminRepository = superadminRepository;
        _passwordGenerator = passwordGenerator;
        _dateTimeService = dateTimeService;
        _superadminReader = superadminReader;
        _queueEmailService = queueEmailService;
        _logger = logger;
    }

    public async Task<SuperadminResponse> HandleAsync(
       SuperadminCommand command,
       CancellationToken cancellationToken)
    {
        // Find existing superadmin by normalized name
        var superAdmin = await _userManager.Users
            .SingleOrDefaultAsync(
                u => u.NormalizedUserName == "SUPERADMIN",
                cancellationToken);

        // Ensure this is the very first user
        if (superAdmin is not null)
        {
            _logger.LogInformation(
                "Bootstrap superadmin already exists. Skipping seeding.");

            return new SuperadminResponse(
                SuperadminData: new SuperadminAccountData
                {
                    UserId = superAdmin.Id,
                    UserName = superAdmin.UserName!,
                    Email = superAdmin.Email!,
                    Roles = ["SuperAdmin"]
                });
        }

        var now = _dateTimeService.UtcNow;

        // Create superadmin object (in memory)
        var superadmin = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            StatusId = UserStatusIds.Active,
            MustChangePassword = true,
            LastPasswordChangedAt = null,
            CreatedById = null,
            CreatedAt = now,
        };

        // Generate temp password (in memory)
        var tempPassword = _passwordGenerator.Generate();

        // Superadmin role ID
        var roleId = command.RoleId.ToString();

        // Find Superadmin role by ID
        var superadminRole = await _roleManager.FindByIdAsync(roleId)
            ?? throw new RoleNotFoundException(command.RoleId);

        // Create Superadmin role to superadmin account
        // Create a new relationship between superadmin and
        // Superadmin role object (in memory)
        var superadminRoleEntity = new ApplicationUserRole
        {
            UserId = superadmin.Id,
            RoleId = superadminRole.Id,
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
        _logger.SuperadminCreatedLog(
            message: ApiMessages.SuperadminCreated,
            userId: superadminAccountData.UserId,
            userName: superadminAccountData.UserName,
            email: superadminAccountData.Email,
            mustChangePassword: superadminAccountData.MustChangePassword,
            roles: superadminAccountData.Roles);

        // In the production environment for Superadmin Prefer controlled
        // bootstrap/provisioning process SSO
        await _queueEmailService.SuperadminWelcomeEmail(
            userName: superadmin.UserName,
            recipientEmail: superadmin.Email,
            tempPassword: tempPassword,
            cancellationToken: cancellationToken);

        // Should be changed to SuperadminData
        return new SuperadminResponse(
            SuperadminData: superadminAccountData);
    }
}
