using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ForgotPassword.ResetForgottenPassword;

public sealed class ResetForgottenPasswordHandler
    : ICommandHandler<ResetForgottenPasswordCommand, ResetForgottenPasswordResponse>
{
    private readonly IUserContext _userContext;
    private readonly IUserProvider _userProvider;
    private readonly IResetPasswordService _resetPasswordService;
    private readonly IUserRepository _userRepository;
    private readonly IUserReader _userReader;
    private readonly IDateTimeService _dateTimeService;
    private readonly ITokenService _tokenService;
    private readonly ILogger<ResetForgottenPasswordHandler> _logger;

    public ResetForgottenPasswordHandler(
        IUserContext userContext,
        IUserProvider userProvider,
        IResetPasswordService resetPasswordService,
        IUserRepository userRepository,
        IUserReader userReader,
        IDateTimeService dateTimeService,
        ITokenService tokenService,
        ILogger<ResetForgottenPasswordHandler> logger)
    {
        _userContext = userContext;
        _userProvider = userProvider;
        _resetPasswordService = resetPasswordService;
        _userRepository = userRepository;
        _userReader = userReader;
        _dateTimeService = dateTimeService;
        _tokenService = tokenService;
        _logger = logger;
    }

    public async Task<ResetForgottenPasswordResponse> HandleAsync(
        ResetForgottenPasswordCommand command,
        CancellationToken cancellationToken)
    {
        var userId = command.UserId;

        // Find user by ID
        var user = await _userProvider.GetUserAsync(userId.ToString())
            ?? throw new UserNotFoundException(userId);

        var result = await _resetPasswordService.ResetPasswordAsync(
            user,
            command.Token,
            command.NewPassword);

        // Check if the password reset succeeded
        if (!result.Succeeded)
        {
            _logger.LogWarning(
                "Password reset failed for user {UserId}. Errors: {Errors}",
                user.Id,
                string.Join(", ", result.Errors.First().Description));

            if (result.Errors.Any(e => e.Code == "InvalidToken"))
            {
                throw new AuthenticationFailedException("Reset token is invalid or expired.");
            }

            throw new PasswordResetFailedException(
                errors: new()
                {
                    ["username"] =
                    [
                        result.Errors.First().Description
                    ],
                });
        }

        // now
        var now = _dateTimeService.UtcNow;

        var rows = await _userRepository.UpdatePasswordAsync(
            userId,
            now,
            cancellationToken);

        // session ID
        var sessionId = _userContext.SessionId;

        // Issue new token
        var token = await _tokenService.IssueAfterResetForgottenPasswordAsync(
            user,
            sessionId,
            now,
            cancellationToken);

        // Successful log
        _logger.LogInformation(
            "User {UserId} reset their password via forgot password flow",
            userId);


        // TODO: Domain event



        var userAccountData = await _userReader.GetByIdAsync(
            userId,
            cancellationToken);

        return new ResetForgottenPasswordResponse(userAccountData);
    }
}
