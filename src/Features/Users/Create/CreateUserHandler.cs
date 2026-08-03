using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.UserStatuses;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Features.Users.Create;

public sealed class CreateUserHandler :
    ICommandHandler<CreateUserCommand, CreateUserResponse>
{
    private readonly IUserProvider _userProvider;
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly ITemporaryPasswordGenerator _passwordGenerator;
    private readonly IDateTimeService _dateTimeService;
    private readonly ILogger<CreateUserHandler> _logger;

    public CreateUserHandler(
        IUserProvider userProvider,
        UserManager<ApplicationUser> userManager,
        ITemporaryPasswordGenerator passwordGenerator,
        IDateTimeService dateTimeService,
        ILogger<CreateUserHandler> logger)
    {
        _userProvider = userProvider;
        _userManager = userManager;
        _passwordGenerator = passwordGenerator;
        _dateTimeService = dateTimeService;
        _logger = logger;
    }

    public async Task<CreateUserResponse> HandleAsync(
        CreateUserCommand command,
        CancellationToken cancellationToken)
    {
        // Resolve user with ID
        var currentUser = await _userProvider.GetUserAsync(cancellationToken)
            ?? throw new AuthorizationFailedException("Unauthorized user.");

        // Create a new user
        var user = new ApplicationUser
        {
            UserName = command.UserName,
            Email = command.Email,
            StatusId = UserStatusIds.Active,
            LastPasswordChangedAt = null,
            MustChangePassword = true,
            CreatedById = currentUser.Id,
            CreatedAt = _dateTimeService.UtcNow,

            //IsDeleted = false // HasDefaultValue(false) (Global flag)
        };

        // Generate a temp password
        var tempPassword = _passwordGenerator.Generate();

        // Create a new user 
        var userResult = await _userManager.CreateAsync(user, tempPassword);

        // Check for user creation success
        if (!userResult.Succeeded)
        {
            _logger.LogWarning(
                "Failed to create user {UserName}. Errors: {Errors}",
                command.UserName,
                string.Join(", ", userResult.Errors.First().Description));

            //409 Conflict
            throw new ConflictException(userResult.Errors.First().Description);
        }

        return new CreateUserResponse(
            UserData: new UserData(
                UserId: user.Id,
                UserName: user.UserName,
                Email: user.Email,
                FullEnName: user.Employee?.FullEnName,
                FullArName: user.Employee?.FullArName,
                EmployeeRowVersion: user.Employee?.RowVersion));
    }
}
