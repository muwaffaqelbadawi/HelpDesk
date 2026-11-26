using FluentValidation;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Users.Languages.Set;

public sealed class SetPreferredLanguageValidator :
    AbstractValidator<SetPreferredLanguageCommand>
{
    public SetPreferredLanguageValidator(IUserReader userReader)
    {
        RuleFor(x => x.PreferredLanguageId)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .MustAsync(async (languageId, cancellationToken) =>
                await userReader.IsLanguageExistAndActiveAsync(
                    languageId,
                    cancellationToken))
            .WithMessage("The selected language is unavailable or inactive.");
    }
}
