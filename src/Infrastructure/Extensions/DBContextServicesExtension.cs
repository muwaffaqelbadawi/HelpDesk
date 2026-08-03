using HelpDesk.src.Infrastructure.Database.DbContext;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DBContextServicesExtension
{
    public static WebApplicationBuilder AddDatabase(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(
                builder.Configuration.GetConnectionString("AppDBConnection")));

        return builder;
    }
}
