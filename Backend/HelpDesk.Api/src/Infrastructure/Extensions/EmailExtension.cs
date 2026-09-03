using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Email;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmailExtension
{
    public static WebApplicationBuilder AddSmtpConfigs(
       this WebApplicationBuilder builder)
    {
        builder.Services
            .AddOptions<SmtpSettings>()
            .Bind(builder.Configuration.GetSection("Smtp"))
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddEmail(
        this WebApplicationBuilder builder)
    {
        builder.AddSmtpConfigs();

        // Register SmtpEmailService as Singleton
        builder.Services.AddSingleton<IEmailService, EmailService>();

        // Register IdentityEmailSender as Singleton
        builder.Services.AddSingleton<IEmailSender<ApplicationUser>, IdentityEmailSender>();

        // Register EmailTemplateRenderer as Singleton service
        builder.Services.AddSingleton<IEmailTemplateRenderer, EmailTemplateRenderer>();

        // Register QueueEmailService as Singleton service
        builder.Services.AddSingleton<IQueueEmailService, QueueEmailService>();

        return builder;
    }
}
