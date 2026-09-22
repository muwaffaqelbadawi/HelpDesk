namespace HelpDesk.src.Shared.Interfaces;

public interface IPasswordResetPolicy
{
    Task EnsurePasswordResetNotRequiredAsync(
        CancellationToken cancellationToken);
}
