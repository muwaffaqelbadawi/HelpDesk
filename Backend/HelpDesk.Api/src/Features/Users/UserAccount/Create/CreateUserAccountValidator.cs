using FluentValidation;

namespace HelpDesk.src.Features.Users.UserAccount.Create;

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

        RuleFor(x => x.PhoneNumber)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.FullEnName)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.FullArName)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.JobTitle)
            .NotEmpty()
            .MaximumLength(100);

        RuleFor(x => x.DepartmentId)
            .NotEmpty();

        RuleFor(x => x.SectorId)
            .NotEmpty();

        RuleFor(x => x.CountryId)
            .NotEmpty();
    }
}
