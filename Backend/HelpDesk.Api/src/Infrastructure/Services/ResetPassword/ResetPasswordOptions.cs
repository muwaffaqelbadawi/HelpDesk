namespace HelpDesk.src.Infrastructure.Services.ResetPassword;

public sealed class ResetPasswordOptions
{
    public int ResetTokenExpiryHours => 24;

    public TimeSpan ResetTokenLifetime =>
        TimeSpan.FromHours(ResetTokenExpiryHours);
}
