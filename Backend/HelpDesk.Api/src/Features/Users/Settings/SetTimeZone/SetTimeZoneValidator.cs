using FluentValidation;

namespace HelpDesk.src.Features.Users.Settings.SetTimeZone;

public sealed class SetTimeZoneValidator : AbstractValidator<SetTimeZoneCommand>
{
    public SetTimeZoneValidator()
    {
        RuleFor(x => x.TimeZoneId)
            .NotEmpty();
    }
}
