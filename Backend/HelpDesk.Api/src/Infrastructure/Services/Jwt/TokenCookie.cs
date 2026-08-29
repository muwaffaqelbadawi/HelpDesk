namespace HelpDesk.src.Infrastructure.Services.Jwt;

public static class TokenCookie
{
    public static void SetTokenCookies(
        this HttpResponse response,
        TokenResult tokenResult,
        IWebHostEnvironment environment)
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

        // Refresh token cookie
        response.Cookies.Append(
            "refresh_token",
            tokenResult.RefreshToken,
            new CookieOptions
            {
                HttpOnly = true,
                Secure = true,
                SameSite = SameSiteMode.Strict,
                Expires = tokenResult.RefreshTokenExpiresAt,
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
