using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Email;
using HelpDesk.src.Infrastructure.Services.Email.EmailTest;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmailServicesExtension
{
    public static IServiceCollection AddEmailServices(
        this IServiceCollection services,
        WebApplicationBuilder builder)
    {
        // Bind settings
        builder.Services.Configure<SmtpSettings>(
            builder.Configuration.GetSection("Email"));


        // Register SmtpEmailService as Singleton
        services.AddSingleton<IEmailService, EmailService>();

        // Register IdentityEmailSender as Singleton
        services.AddSingleton<IEmailSender<ApplicationUser>, IdentityEmailSender>();

        // Register SendTestEmailHandler as Scoped service
        services.AddScoped<ICommandHandler<SendTestEmailCommand, SendTestEmailResponse>, SendTestEmailHandler>();

        return services;
    }
}
