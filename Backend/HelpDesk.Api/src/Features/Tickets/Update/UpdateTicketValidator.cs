using FluentValidation;

namespace HelpDesk.src.Features.Tickets.Update;

public sealed class UpdateTicketValidator : AbstractValidator<UpdateTicketCommand>
{
    public UpdateTicketValidator()
    {
        RuleFor(x => x.TicketId)
            .NotEmpty();

        RuleFor(x => x.TicketTitle)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.TicketSubject)
            .NotEmpty()
            .MaximumLength(1000);

        RuleFor(x => x.TicketPriorityId)
            .NotEmpty();

        RuleFor(x => x.TicketStatusId)
            .NotEmpty();

        RuleFor(x => x.TicketRowVersion)
            .NotEmpty();
    }
}
