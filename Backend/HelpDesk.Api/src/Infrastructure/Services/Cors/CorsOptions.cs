namespace HelpDesk.src.Infrastructure.Services.Cors;

public sealed class CorsOptions
{
    public string Name { get; set; } = null!;
    public string[] Origins { get; set; } = null!;
}
