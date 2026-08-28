namespace HelpDesk.src.Shared.Interfaces;

public interface IEmailTemplateRenderer
{
    Task<string> RenderAsync(
        string templateName,
        Dictionary<string, string>? placeholders = null);
}
