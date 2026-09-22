namespace HelpDesk.src.Shared.Interfaces;

public interface IPasswordResetState
{
    bool MustResetPassword { get; }
}