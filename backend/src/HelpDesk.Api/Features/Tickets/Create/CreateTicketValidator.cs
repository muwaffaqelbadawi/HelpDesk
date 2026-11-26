using FluentValidation;
using HelpDesk.Shared.Constraints;

namespace HelpDesk.Features.Tickets.Create;

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

        RuleFor(x => x.CommentContent)
            .NotEmpty()
            .MaximumLength(4000);

        RuleForEach(x => x.Attachments)
            .Must(file => file.Length > 0)
            .WithMessage("Attachments cannot be empty.");

        RuleForEach(x => x.Attachments)
            .Must(file => file.Length <= AttachmentConstants.MaxFileSize)
            .WithMessage("Attachment size cannot exceed 10 MB.");
    }
}
