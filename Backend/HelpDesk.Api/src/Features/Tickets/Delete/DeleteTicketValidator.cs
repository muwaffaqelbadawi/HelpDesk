using FluentValidation;

namespace HelpDesk.src.Features.Tickets.Delete;

public sealed class DeleteTicketValidator : AbstractValidator<DeleteTicketCommand>
{
    public DeleteTicketValidator()
    {
        RuleFor(x => x.TicketId)
            .NotEmpty();

        RuleFor(x => x.TicketRowVersion)
            .NotEmpty();
    }
}
