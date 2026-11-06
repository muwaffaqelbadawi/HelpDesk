namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationRefreshToken
{
    // Key
    public Guid Id { get; set; }


    // Token
    public string Token { get; set; } = null!;

    // User
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;

    // UserSession
    public Guid UserSessionId { get; set; }
    public ApplicationUserSession UserSession { get; set; } = null!;

    // Connection context
    public string? UserAgent { get; set; }

    // Creation
    public string? CreatedByIp { get; set; }
    public DateTimeOffset CreatedAt { get; set; }
    public DateTimeOffset? ExpiresAt { get; set; }

    // Revocation
    public string? RevokedByIp { get; set; }
    public DateTimeOffset? RevokedAt { get; set; }
}
