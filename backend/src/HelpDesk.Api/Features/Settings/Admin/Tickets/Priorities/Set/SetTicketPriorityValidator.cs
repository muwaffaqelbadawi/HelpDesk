using FluentValidation;
using HelpDesk.Features.Settings.Admin.Sectors.Set;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Tickets.Priorities.Set;

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
