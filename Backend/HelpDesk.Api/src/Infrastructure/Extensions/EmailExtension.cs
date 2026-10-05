using HelpDesk.src.Infrastructure.Services.Email;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmailExtension
{
    public static WebApplicationBuilder AddSmtpConfigs(
       this WebApplicationBuilder builder)
    {
        var smtpSection = builder.Configuration.GetSection("Smtp");

        builder.Services
            .AddOptions<SmtpSettings>()
            .Bind(smtpSection)
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddEmail(
        this WebApplicationBuilder builder)
    {
        builder.AddSmtpConfigs();

        // Register SmtpEmailService as Singleton
        builder.Services.AddSingleton<IEmailService, EmailService>();

        // Register EmailTemplateRenderer as Singleton service
        builder.Services.AddSingleton<IEmailTemplateRenderer, EmailTemplateRenderer>();

        // Register QueueEmailService as Singleton service
        builder.Services.AddSingleton<IQueueEmailService, QueueEmailService>();

        return builder;
    }
}
