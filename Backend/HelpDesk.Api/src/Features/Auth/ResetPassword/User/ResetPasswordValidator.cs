using FluentValidation;

namespace HelpDesk.src.Features.Auth.ResetPassword.User;

public sealed class ResetPasswordValidator : AbstractValidator<ResetPasswordCommand>
{
    public ResetPasswordValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty();

        RuleFor(x => x.ResetToken)
            .NotEmpty();

        RuleFor(x => x.NewPassword)
            .NotEmpty();

        RuleFor(x => x.ConfirmNewPassword)
            .Equal(x => x.NewPassword)
            .WithMessage("The new password and confirmation password do not match.");
    }
}
