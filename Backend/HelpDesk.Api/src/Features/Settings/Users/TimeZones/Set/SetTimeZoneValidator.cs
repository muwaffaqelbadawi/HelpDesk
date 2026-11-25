using FluentValidation;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Users.TimeZones.Set;

public sealed class SetTimeZoneValidator
    : AbstractValidator<SetTimeZoneCommand>
{
    public SetTimeZoneValidator(IUserReader userReader)
    {
        RuleFor(x => x.TimeZoneId)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MustAsync(async (timeZoneId, cancellationToken) =>
                await userReader.IsTimeZoneExistAndActiveAsync(
                    timeZoneId,
                    cancellationToken))
            .WithMessage("The selected timeZone is unavailable or inactive.");
    }
}
