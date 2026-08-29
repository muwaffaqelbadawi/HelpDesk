namespace HelpDesk.src.Shared.Interfaces;

public interface IRefreshTokenRevocationService
{
    Task<int> RevokeAllAsync(Guid userId,
        CancellationToken cancellationToken);
}
