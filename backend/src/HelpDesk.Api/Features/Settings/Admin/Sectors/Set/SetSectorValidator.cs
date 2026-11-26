using FluentValidation;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Sectors.Set;

public sealed class SetSectorValidator
    : AbstractValidator<SetSectorCommand>
{
    public SetSectorValidator(IUserReader userReader)
    {
        RuleFor(x => x.SectorId)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MustAsync(async (sectorId, cancellationToken) =>
                await userReader.IsSectorExistAndActiveAsync(
                    sectorId,
                    cancellationToken))
            .WithMessage("The selected sector is unavailable or inactive.");
    }
}
