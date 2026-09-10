using HelpDesk.src.Shared.Interfaces;
using PhoneNumbers;

namespace HelpDesk.src.Shared.DomainRules.Users.CreateUserAccount;

public sealed class PhoneNumberRules : IPhoneNumberRules
{
    public bool IsValidPhoneNumber(string phoneNumber)
    {
        var phoneUtil = PhoneNumberUtil.GetInstance();

        var number = phoneUtil.Parse(phoneNumber, null);

        return phoneUtil.IsValidNumber(number);
    }
}
