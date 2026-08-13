using FluentValidation;
using HelpDesk.src.Shared.Policies;

namespace HelpDesk.src.Features.Tickets.Create;


public sealed class CreateTicketValidator : AbstractValidator<CreateTicketCommand>
{
    public CreateTicketValidator()
    {
        RuleFor(x => x.TicketTitle)
            .NotEmpty()
            .MaximumLength(TicketPolicy.TitleMaxLength);

        RuleFor(x => x.TicketSubject)
            .NotEmpty()
            .MaximumLength(TicketPolicy.SubjectMaxLength);
    }
}
