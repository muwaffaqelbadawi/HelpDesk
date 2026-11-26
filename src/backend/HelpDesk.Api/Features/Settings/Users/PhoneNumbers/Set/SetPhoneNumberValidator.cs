using FluentValidation;
using PhoneNumbers;

namespace HelpDesk.Features.Settings.Users.PhoneNumbers.Set;

public sealed class SetPhoneNumberValidator : AbstractValidator<SetPhoneNumberCommand>
{
    public SetPhoneNumberValidator()
    {
        RuleFor(x => x.PhoneNumber)
            .Cascade(CascadeMode.Stop)
            .NotEmpty()
            .WithMessage("Phone number is required.")
            .Must(BeValidPhoneNumber)
            .WithMessage("Phone number is invalid.");
    }

    private static bool BeValidPhoneNumber(string phoneNumber)
    {
        try
        {
            var phoneUtil = PhoneNumberUtil.GetInstance();

            var number = phoneUtil.Parse(phoneNumber, null);

            return phoneUtil.IsValidNumber(number);
        }
        catch (NumberParseException)
        {
            return false;
        }
    }
}
