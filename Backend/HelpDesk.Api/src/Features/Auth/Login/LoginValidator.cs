using FluentValidation;
using HelpDesk.src.Shared.IdentityBuilders;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginValidator : AbstractValidator<LoginCommand>
{
    public LoginValidator()
    {
        RuleFor(x => x.Identity)
            .EmailAddress()
            .When(x => IdentityClassifier.IsEmail(x.Identity))
            .WithMessage("Identity must be a valid email address.");

        RuleFor(x => x.Identity)
            .Must(IdentityClassifier.IsEmployeeNumber)
            .When(x => IdentityClassifier.LooksLikeEmployeeNumber(x.Identity))
            .WithMessage("Employee number must contain exactly 6 digits.");

        RuleFor(x => x.Password)
            .NotEmpty();
    }
}

