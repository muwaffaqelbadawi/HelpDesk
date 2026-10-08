using FluentValidation;

namespace HelpDesk.src.Features.Tickets.Create;


public sealed class CreateTicketValidator : AbstractValidator<CreateTicketCommand>
{
    public CreateTicketValidator()
    {
        RuleFor(x => x.TicketTitle)
            .NotEmpty()
            .MaximumLength(200);

        RuleFor(x => x.TicketSubject)
            .NotEmpty()
            .MaximumLength(1000);
    }
}
