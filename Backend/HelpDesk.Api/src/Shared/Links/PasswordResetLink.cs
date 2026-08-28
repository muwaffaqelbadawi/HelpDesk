namespace HelpDesk.src.Shared.Links;

public static class PasswordResetLink
{
    public static string Build(
        string baseUrl,
        Guid userId,
        string token)
    {
        var encodedToken = Uri.EscapeDataString(token);

        return $"{baseUrl.TrimEnd('/')}/reset-password" +
               $"?userId={userId}&token={encodedToken}";
    }
}
