namespace HelpDesk.src.Shared.Filters;

public sealed class IdentityClassifiers
{
    public static bool IsEmail(string identity)
    {
        return identity.Contains('@');
    }

    public static bool IsEmployeeNumber(string identity)
    {
        return identity.StartsWith("EMP");
    }
}
