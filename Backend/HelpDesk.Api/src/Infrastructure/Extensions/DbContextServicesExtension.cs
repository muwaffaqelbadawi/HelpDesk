using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DbContextServicesExtension
{
    public static WebApplicationBuilder AddDBConfigs(
        this WebApplicationBuilder builder)
    {
        // It will be read from the environment variables
        // make sure to configure it in your profile

        var connectionString = builder.Configuration
            .GetConnectionString("AppDBConnection");

        if (string.IsNullOrWhiteSpace(connectionString))
        {
            throw new InvalidOperationException(
                "Connection string 'AppDBConnection' is not configured.");
        }

        // Connection string
        builder.Services.AddDbContext<AppDbContext>(
            options => options.UseSqlServer(connectionString));

        return builder;
    }

    public static WebApplicationBuilder AddDBServices(
        this WebApplicationBuilder builder)
    {
        // SQL Server sequence
        builder.Services.AddScoped<INumberingService, NumberingService>();

        return builder;
    }

    public static WebApplicationBuilder AddDatabase(
        this WebApplicationBuilder builder)
    {
        builder
            .AddDBConfigs()
            .AddDBServices();

        return builder;
    }
}
