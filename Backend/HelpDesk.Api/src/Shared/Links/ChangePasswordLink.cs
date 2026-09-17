namespace HelpDesk.src.Shared.Links;

public static class ChangePasswordLink
{
    public static string Build(
        string baseUrl,
        Guid userId,
        string token)
    {
        var encodedToken = Uri.EscapeDataString(token);

        return $"{baseUrl.TrimEnd('/')}/change-password" +
               $"?userId={userId}&token={encodedToken}";
    }
}
