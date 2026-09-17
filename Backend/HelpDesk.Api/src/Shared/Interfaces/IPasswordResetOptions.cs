namespace HelpDesk.src.Shared.Interfaces;

public interface IPasswordResetOptions
{
    public TimeSpan TokenLifetime { get; }
}
