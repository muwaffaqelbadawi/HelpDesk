using FluentValidation;

namespace HelpDesk.src.Features.Auth.Register;

public sealed class RegisterValidator : AbstractValidator<RegisterCommand>
{
    public RegisterValidator()
    {
        //RuleFor(x => x.Identity)
        //    .NotEmpty();

        //RuleFor(x => x.Password)
        //    .NotEmpty();
    }
}
