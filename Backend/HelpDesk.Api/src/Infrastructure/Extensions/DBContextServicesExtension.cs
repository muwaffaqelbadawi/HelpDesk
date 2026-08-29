using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Infrastructure.Services.SQLServerSequence;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DBContextServicesExtension
{
    public static WebApplicationBuilder AddDatabase(
        this WebApplicationBuilder builder)
    {
        // Connection string
        builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(
                builder.Configuration.GetConnectionString("AppDBConnection")));

        // SQL Server sequence
        builder.Services.AddScoped<INumberingService, NumberService>();

        return builder;
    }
}
