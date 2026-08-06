using System.Data;
using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Logging;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Features.Admin;

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
        // Ensure this is the very first user
        if (await _userManager.Users.AnyAsync(cancellationToken))
        {
            _logger.LogInformation("Another user exists, skip admin bootstrapping.");

            return new AdminResponse(
                AdminData: new AdminData(
                Guid.Empty,
                string.Empty,
                string.Empty),
                TempPassword: string.Empty);
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

        // Assign SuperAdmin role
        var role = await _roleManager.FindByNameAsync(command.RoleName)
            ?? throw new RoleNotFoundException(command.RoleName);

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
            command.RoleName,
            user.Id);

        var adminData = new AdminData(
            UserId: user.Id,
            UserName: user.UserName,
            Email: user.Email);

        _logger.AdminCreatedLog(
            message: "SuperAdmin created successfully",
            adminData: adminData,
            roles: [command.RoleName],
            tempPassword: tempPassword);

        return new AdminResponse(
            AdminData: adminData,
            TempPassword: tempPassword);
    }
}
