namespace HelpDesk.src.Shared.Links;

public static class ResetPasswordLink
{
    public static string Build(
        string baseUrl,
        Guid userId,
        string token)
    {
        var encodedToken = Uri.EscapeDataString(token);

        return $"{baseUrl.TrimEnd('/')}/auth/reset-password" +
               $"?userId={userId}&token={encodedToken}";
    }
}
