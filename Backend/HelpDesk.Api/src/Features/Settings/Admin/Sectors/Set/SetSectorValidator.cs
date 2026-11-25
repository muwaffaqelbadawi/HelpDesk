using FluentValidation;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Sectors.Set;

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
