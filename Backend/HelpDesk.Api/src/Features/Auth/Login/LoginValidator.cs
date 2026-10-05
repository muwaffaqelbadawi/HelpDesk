using FluentValidation;
using HelpDesk.src.Shared.IdentityBuilders;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginValidator : AbstractValidator<LoginCommand>
{
    public LoginValidator()
    {
        RuleFor(x => x.Username)
            .EmailAddress()
            .When(x => IdentityClassifier.IsEmail(x.Username))
            .WithMessage("Please enter a valid email address.");

        RuleFor(x => x.Username)
            .Must(IdentityClassifier.IsEmployeeNumber)
            .When(x => IdentityClassifier.LooksLikeEmployeeNumber(x.Username))
            .WithMessage("Employee number must contain exactly 6 digits.");

        RuleFor(x => x.Password)
            .NotEmpty();
    }
}
