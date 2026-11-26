using FluentValidation;

namespace HelpDesk.Features.Tickets.Assign;

public sealed class AssignTicketValidator : AbstractValidator<AssignTicketCommand>
{
    public AssignTicketValidator()
    {
        RuleFor(x => x.UserId)
            .NotEmpty();

        RuleFor(x => x.TicketId)
            .NotEmpty();

        RuleFor(x => x.TicketRowVersion)
            .NotEmpty();
    }
}
