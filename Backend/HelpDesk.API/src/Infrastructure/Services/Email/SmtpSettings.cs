namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class SmtpSettings
{
    public string Host { get; set; } = null!;
    public int Port { get; set; } = 587;
    public bool UseSsl { get; set; } = true;
    public string Username { get; set; } = null!;
    public string Password { get; set; } = null!;
    public string SenderEmail { get; set; } = null!;
    public string SenderName { get; set; } = null!;
}
