namespace HelpDesk.Shared.Interfaces;

public interface IResetPasswordPolicy
{
    Task EnsurePasswordResetNotRequiredAsync(
        CancellationToken cancellationToken);
}
