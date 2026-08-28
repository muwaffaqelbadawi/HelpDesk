using FluentValidation;
using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Email;
using HelpDesk.src.Infrastructure.Services.Email.TestEmail;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmailServicesExtension
{
    public static IServiceCollection AddEmailServices(
        this IServiceCollection services,
        WebApplicationBuilder builder)
    {
        // Bind SMTP settings
        builder.Services.Configure<SmtpSettings>(
            builder.Configuration.GetSection("Smtp"));


        // Email Services

        // Register SmtpEmailService as Singleton
        services.AddSingleton<IEmailService, EmailService>();

        // Register IdentityEmailSender as Singleton
        services.AddSingleton<IEmailSender<ApplicationUser>, IdentityEmailSender>();

        // Register EmailTemplateRenderer as Singleton service
        services.AddSingleton<IEmailTemplateRenderer, EmailTemplateRenderer>();

        // Register QueueEmailService as Singleton service
        services.AddSingleton<IQueueEmailService, QueueEmailService>();



        // TestEmail

        // Register SendTestEmailHandler as Scoped service
        services.AddScoped<ICommandHandler<TestEmailCommand, TestEmailResponse>, TestEmailHandler>();

        // Register TestEmailValidator from the assembly containing TestEmailValidator
        services.AddValidatorsFromAssemblyContaining<TestEmailValidator>();

        return services;
    }
}
