using FluentValidation;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Departments.Set;

public sealed class SetDepartmentValidator
    : AbstractValidator<SetDepartmentCommand>
{
    public SetDepartmentValidator(IUserReader userReader)
    {
        RuleFor(x => x.DepartmentId)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MustAsync(async (departmentId, cancellationToken) =>
                await userReader.IsDepartmentExistAndActiveAsync(
                    departmentId,
                    cancellationToken))
            .WithMessage("The selected department is unavailable or inactive.");
    }
}