using FluentValidation;

namespace HelpDesk.src.Features.Users.Create;

public sealed class CreateUserAccountValidator : AbstractValidator<CreateUserAccountCommand>
{
    public CreateUserAccountValidator()
    {
        RuleFor(x => x.UserName)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(200);

        RuleFor(x => x.FullEnName)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.FullArName)
            .NotEmpty()
            .MaximumLength(200);
    }
}
