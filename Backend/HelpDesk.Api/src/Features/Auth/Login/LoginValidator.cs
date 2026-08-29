using FluentValidation;

namespace HelpDesk.src.Features.Auth.Login;

public sealed class LoginValidator : AbstractValidator<LoginCommand>
{
    public LoginValidator()
    {
        RuleFor(x => x.Identity)
            .NotEmpty();

        RuleFor(x => x.Password)
            .NotEmpty();
    }
}
