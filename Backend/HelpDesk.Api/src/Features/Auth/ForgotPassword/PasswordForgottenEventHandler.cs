using HelpDesk.src.Features.Auth.ResetPassword.User;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.ForgotPassword;

public sealed class PasswordForgottenEventHandler(
    ICommandHandler<ResetPasswordCommand, ResetPasswordResponse> handler)
        : IDomainEventHandler<PasswordForgottenEvent>
{
    public Task HandleAsync(
        PasswordForgottenEvent @event,
        CancellationToken cancellationToken = default)
    {
        var userId = @event.User.Id;
        var resetToken = @event.ResetToken;
        var newPassword = @event.NewPassword;
        var confirmedPassword = @event.ConfirmNewPassword;

        if (userId == Guid.Empty)
        {
            throw new ValidationException(
                errors: new()
                {
                    ["userId"] = ["userId is missing or invalid."]
                });
        }

        if (string.IsNullOrWhiteSpace(resetToken))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["resetToken"] = ["Reset token is missing or invalid."]
                });
        }

        if (string.IsNullOrWhiteSpace(newPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["newPassword"] = ["The entered password is invalid."]
                });
        }

        if (string.IsNullOrWhiteSpace(confirmedPassword))
        {
            throw new ValidationException(
                errors: new()
                {
                    ["confirmedPassword"] = ["The entered password is invalid."]
                });
        }

        var command = new ResetPasswordCommand(
            userId,
            resetToken,
            newPassword,
            confirmedPassword);

        return handler.HandleAsync(
            command,
            cancellationToken);
    }
}
