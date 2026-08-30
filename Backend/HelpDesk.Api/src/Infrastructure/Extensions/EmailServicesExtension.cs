using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Infrastructure.Services.Email;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class EmailServicesExtension
{
    public static WebApplicationBuilder AddEmail(
        this WebApplicationBuilder builder)
    {
        // Bind SMTP settings
        builder.Services.Configure<SmtpSettings>(
            builder.Configuration.GetSection("Smtp"));


        // Email Services

        // Register SmtpEmailService as Singleton
        builder.Services.AddSingleton<IEmailService, EmailService>();

        // Register IdentityEmailSender as Singleton
        builder.Services.AddSingleton<IEmailSender<ApplicationUser>, IdentityEmailSender>();

        // Register EmailTemplateRenderer as Singleton service
        builder.Services.AddSingleton<IEmailTemplateRenderer, EmailTemplateRenderer>();

        // Register QueueEmailService as Singleton service
        builder.Services.AddSingleton<IQueueEmailService, QueueEmailService>();



        // TestEmail

        // Register SendTestEmailHandler with its pipeline
        //services.AddCommandPipeline<
        //    TestEmailCommand,
        //    TestEmailResponse,
        //    TestEmailHandler>();


        /*
         
        // We will test this
        services.AddScoped<ICommandHandler<
            TestEmailCommand,
            TestEmailResponse>,
            TestEmailHandler>();

        */

        // Register TestEmailValidator from the assembly containing TestEmailValidator
        //services.AddValidatorsFromAssemblyContaining<TestEmailValidator>();

        return builder;
    }
}


