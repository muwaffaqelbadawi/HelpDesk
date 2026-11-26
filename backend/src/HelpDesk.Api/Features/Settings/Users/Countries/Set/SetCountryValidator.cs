using FluentValidation;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.Countries.Set;

public sealed class SetCountryValidator
    : AbstractValidator<SetCountryCommand>
{
    public SetCountryValidator(IUserReader userReader)
    {
        RuleFor(x => x.CountryId)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MustAsync(async (countryId, cancellationToken) =>
                await userReader.IsCountryExistAndActiveAsync(
                    countryId,
                    cancellationToken))
            .WithMessage("The selected country is unavailable or inactive.");
    }
}
