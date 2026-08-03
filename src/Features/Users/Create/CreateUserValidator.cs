using FluentValidation;
using HelpDesk.src.Shared.Policies;

namespace HelpDesk.src.Features.Users.Create;

public sealed class CreateUserValidator : AbstractValidator<CreateUserCommand>
{
    public CreateUserValidator()
    {
        RuleFor(x => x.UserName)
            .NotEmpty()
            .MaximumLength(UserPolicy.UserNameMaxLength);

        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MaximumLength(UserPolicy.EmailMaxLength);
    }
}