using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Options;

public sealed class PasswordResetOptions : IPasswordResetOptions
{
    public TimeSpan TokenLifetime => TimeSpan.FromHours(24);
}