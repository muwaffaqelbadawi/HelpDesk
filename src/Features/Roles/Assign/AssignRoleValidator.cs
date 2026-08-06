using FluentValidation;
using HelpDesk.src.Shared.Policies;

namespace HelpDesk.src.Features.Roles.Assign;

public sealed class AssignRoleValidator : AbstractValidator<AssignRoleCommand>
{
    public AssignRoleValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty();

        RuleFor(x => x.Role)
            .NotEmpty()
            .MaximumLength(RolePolicy.NameMaxLength);
    }
}
