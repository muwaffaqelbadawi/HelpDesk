namespace HelpDesk.src.Shared.Interfaces;

public interface IResetPasswordPolicy
{
    Task EnsurePasswordResetNotRequiredAsync(
        CancellationToken cancellationToken);
}
