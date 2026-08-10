using Serilog;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class LoggingServicesExtension
{
    public static WebApplicationBuilder AddApplicationLogging(
        this WebApplicationBuilder builder)
    {
        builder.Host.UseSerilog(
            (context, services, configuration) => configuration
                .ReadFrom.Configuration(context.Configuration)
                .ReadFrom.Services(services)
                .Enrich.FromLogContext()
                .Enrich.WithMachineName()
                .Enrich.WithThreadId()
                .WriteTo.Console(
                    outputTemplate:
                        "[{Timestamp:HH:mm:ss} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}")
                .WriteTo.File(
                    "Logs/log-.log",
                    rollingInterval: RollingInterval.Day,
                    retainedFileCountLimit: 30,
                    outputTemplate:
                    "[{Timestamp:yyyy-MM-dd HH:mm:ss.fff zzz} {Level:u3}] {Message:lj} {Properties:j}{NewLine}{Exception}"));

        return builder;
    }
}
