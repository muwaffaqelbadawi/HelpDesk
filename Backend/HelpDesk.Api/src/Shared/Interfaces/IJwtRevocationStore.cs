namespace HelpDesk.src.Shared.Interfaces;

public interface IJwtRevocationStore
{
    Task RevokeAsync(
        Guid jti,
        DateTimeOffset expiresAt,
        CancellationToken cancellationToken);

    Task<bool> IsRevokedAsync(
        Guid jti,
        CancellationToken cancellationToken);
}
