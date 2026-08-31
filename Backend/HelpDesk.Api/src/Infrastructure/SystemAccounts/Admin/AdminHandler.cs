using System.Data;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Projections;
using HelpDesk.src.Shared.Responses.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Admin;

public sealed class AdminHandler :
    ICommandHandler<AdminCommand, AdminResponse>
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<ApplicationRole> _roleManager;
    private readonly AppDbContext _dbContext;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<AdminHandler> _logger;

    public AdminHandler(
        UserManager<ApplicationUser> userManager,
        RoleManager<ApplicationRole> roleManager,
        AppDbContext dbContext,
        ITemporaryPasswordGenerator passwordGenerator,
        IDateTimeService dateTimeService,
        ILogger<AdminHandler> logger)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _dbContext = dbContext;
        _passwordGenerator = passwordGenerator;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<AdminResponse> HandleAsync(
       AdminCommand command,
       CancellationToken cancellationToken)
    {
        var superAdmin = await _userManager.Users
            .SingleOrDefaultAsync(
                u => u.NormalizedUserName == "SUPERADMIN",
                cancellationToken);

        // Ensure this is the very first user
        if (superAdmin is not null)
        {
            _logger.LogInformation(
                "Bootstrap SuperAdmin already exists. Skipping seeding.");

            return new AdminResponse(
                AdminData: new AdminData
                {
                    UserId = superAdmin.Id,
                    UserName = superAdmin.UserName!,
                    Email = superAdmin.Email!,
                    Roles = ["SuperAdmin"]
                });
        }

        var now = _dateTimeService.UtcNow;

        var user = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            StatusId = UserStatusIds.Active,
            MustChangePassword = true,
            LastPasswordChangedAt = null,
            CreatedById = null,
            CreatedAt = now,
        };

        // Generate temp password
        var tempPassword = _passwordGenerator.Generate();

        // Create a new user
        var userResult = await _userManager.CreateAsync(user, tempPassword);

        // Check for user creation success
        if (!userResult.Succeeded)
        {
            _logger.LogWarning(
                "Failed to create SuperAdmin {UserName}. Errors: {Errors}",
                command.UserName,
                string.Join(", ", userResult.Errors.Select(e => e.Description)));

            throw new InvalidOperationException(
                string.Join(", ",
                    userResult.Errors.Select(e => e.Description)));
        }

        var roleId = command.RoleId.ToString();

        // Assign SuperAdmin role
        var role = await _roleManager.FindByIdAsync(roleId)
            ?? throw new RoleNotFoundException(command.RoleId);

        // Create new assignment
        _dbContext.UserRoles.Add(new ApplicationUserRole
        {
            UserId = user.Id,
            RoleId = role.Id,
            AssignedAt = now,
            AssignedById = null
        });

        await _dbContext.SaveChangesAsync(cancellationToken);

        _logger.LogInformation(
            "The role {Role} is assigned to user {User}",
            command.RoleId,
            user.Id);

        var adminAccountData = await _dbContext.Users
            .AsNoTracking()
            .Where(u => u.Id == user.Id)
            .SelectAdminAccount()
            .SingleAsync(cancellationToken);

        _logger.AdminCreatedLog(
            message: "SuperAdmin created successfully",
            userId: adminAccountData.UserId,
            userName: adminAccountData.UserName,
            email: adminAccountData.Email,
            mustChangePassword: adminAccountData.MustChangePassword,
            roles: adminAccountData.Roles,
            tempPassword: tempPassword);

        return new AdminResponse(adminAccountData);
    }
}
