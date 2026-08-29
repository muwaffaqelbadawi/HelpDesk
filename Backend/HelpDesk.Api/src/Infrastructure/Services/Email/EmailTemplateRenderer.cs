using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Email;

public sealed class EmailTemplateRenderer(
    IWebHostEnvironment environment) : IEmailTemplateRenderer
{
    public async Task<string> RenderAsync(
        string templateName,
        Dictionary<string, string>? placeholders = null)
    {
        var templatePath = Path.Combine(
            environment.ContentRootPath,
            "src",
            "Infrastructure",
            "Services",
            "Email",
            "Templates",
            templateName);

        var template = await File.ReadAllTextAsync(templatePath);

        if (placeholders is null)
            return template;

        foreach (var (key, value) in placeholders)
        {
            template = template.Replace(
                $"{{{key}}}",
                value);
        }

        return template;
    }
}