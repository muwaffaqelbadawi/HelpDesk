using FluentValidation;
using HelpDesk.src.Features.Settings.Admin.Sectors.Set;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Tickets.Priorities.Set;

public sealed class SetTicketPriorityValidator
    : AbstractValidator<SetSectorCommand>
{
    public SetTicketPriorityValidator(IUserReader userReader)
    {
        RuleFor(x => x.SectorId)
            .Cascade(CascadeMode.Stop)
            .NotEmpty();
        //.MustAsync(async (sectorId, cancellationToken) =>
        //    await userReader.IsSectorExistAndActiveAsync(
        //        sectorId,
        //        cancellationToken))
        //.WithMessage("The selected sector is unavailable or inactive.");
    }
}
