using FluentValidation;
using HelpDesk.src.Shared.Policies;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed class UpdateTicketValidator : AbstractValidator<UpdateTicketCommand>
{
    public UpdateTicketValidator()
    {
        RuleFor(x => x.TicketId)
            .NotEmpty();

        RuleFor(x => x.TicketTitle)
            .NotEmpty()
            .MaximumLength(TicketPolicy.TitleMaxLength);

        RuleFor(x => x.TicketSubject)
            .NotEmpty()
            .MaximumLength(TicketPolicy.SubjectMaxLength);

        RuleFor(x => x.TicketPriorityId)
            .NotEmpty();

        RuleFor(x => x.TicketStatusId)
            .NotEmpty();

        RuleFor(x => x.TicketRowVersion)
            .NotEmpty();
    }
}
