namespace HelpDesk.src.Infrastructure.Services.Jwt;

public static class TokenCookie
{
    public static void SetTokenCookies(
        this HttpResponse response,
        TokenResult tokenResult)
    {
        // Access token cookie
        response.Cookies.Append(
            "access_token",
            tokenResult.AccessToken,
            new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = tokenResult.AccessTokenExpiresAt
            });

        response.SetRefreshTokenCookie(
            tokenResult.RefreshToken,
            tokenResult.RefreshTokenExpiresAt);
    }

    public static void SetRefreshTokenCookie(
        this HttpResponse response,
        string refreshToken,
        DateTimeOffset expiresAt)
    {
        response.Cookies.Append(
            "refresh_token",
            refreshToken,
            new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = expiresAt,
                Path = "/api/auth/refresh-token"
            });
    }

    public static void ClearTokenCookies(this HttpResponse response)
    {
        // access token
        response.Cookies.Delete("access_token");

        // refresh token
        response.Cookies.Delete(
            "refresh_token",
            new CookieOptions
            {
                Path = "/api/auth/refresh-token"
            });
    }
}
