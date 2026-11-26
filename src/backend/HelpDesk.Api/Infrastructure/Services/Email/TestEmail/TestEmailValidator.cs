using FluentValidation;

namespace HelpDesk.Infrastructure.Services.Email.TestEmail;

public sealed class TestEmailValidator : AbstractValidator<TestEmailCommand>
{
    public TestEmailValidator()
    {
        RuleFor(x => x.RecipientEmail)
            .NotEmpty()
            .EmailAddress();
    }
}
