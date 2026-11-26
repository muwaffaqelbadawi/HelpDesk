namespace HelpDesk.Shared.Interfaces;

public interface IResetPasswordState
{
    bool MustResetPassword { get; }
}