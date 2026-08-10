using FluentValidation;

namespace HelpDesk.src.Features.Roles.Assign;

public sealed class AssignRoleValidator : AbstractValidator<AssignRoleCommand>
{
    public AssignRoleValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty();

        RuleFor(x => x.RoleId)
            .NotEmpty();
    }
}
