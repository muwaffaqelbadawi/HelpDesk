namespace HelpDesk.src.Infrastructure.Services.UserSession;

public sealed class UserSessionOptions
{
    public int UserSessionExpiryDays { get; init; }

    public TimeSpan UserSessionLifetime =>
        TimeSpan.FromDays(UserSessionExpiryDays);
}
