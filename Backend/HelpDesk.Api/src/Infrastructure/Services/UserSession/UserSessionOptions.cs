namespace HelpDesk.src.Infrastructure.Services.UserSession;

public sealed class UserSessionOptions
{
    public int DefaultSessionExpiryMinutes { get; init; }
    public int PersistentSessionExpiryDays { get; init; }

    public TimeSpan DefaultSessionLifetime =>
        TimeSpan.FromMinutes(DefaultSessionExpiryMinutes);

    public TimeSpan PersistentSessionLifetime =>
        TimeSpan.FromDays(PersistentSessionExpiryDays);
}
