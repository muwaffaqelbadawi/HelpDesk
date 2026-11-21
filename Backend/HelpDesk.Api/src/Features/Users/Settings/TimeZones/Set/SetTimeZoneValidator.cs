using FluentValidation;

namespace HelpDesk.src.Features.Users.Settings.TimeZones.Set;

public sealed class SetTimeZoneValidator : AbstractValidator<SetTimeZoneCommand>
{
    public SetTimeZoneValidator()
    {
        RuleFor(x => x.TimeZoneId)
            .NotEmpty();
    }
}
