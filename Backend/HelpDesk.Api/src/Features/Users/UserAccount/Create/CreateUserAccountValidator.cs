using FluentValidation;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

public sealed class CreateUserAccountValidator : AbstractValidator<CreateUserAccountCommand>
{
    public CreateUserAccountValidator()
    {
        //RuleFor(x => x.)
        //    .NotEmpty()
        //    .MaximumLength();

        //RuleFor(x => x.)
        //    .NotEmpty()
        //    .MaximumLength();
    }
}
