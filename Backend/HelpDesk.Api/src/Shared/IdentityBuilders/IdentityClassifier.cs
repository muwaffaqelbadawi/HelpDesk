namespace HelpDesk.src.Shared.IdentityBuilders;

public static class IdentityClassifier
{
    public static bool IsEmail(string identity)
    {
        return identity.Contains('@');
    }

    public static bool LooksLikeEmployeeNumber(string identity)
    {
        return identity.All(char.IsDigit);
    }

    public static bool IsEmployeeNumber(string identity)
    {
        return identity.Length == 6
            && identity.All(char.IsDigit);
    }
}
