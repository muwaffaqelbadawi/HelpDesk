using HelpDesk.Infrastructure.Database.DbContext;
using HelpDesk.Shared.AssemblyMarker;
using HelpDesk.Shared.Interfaces;
using HelpDesk.Tests.Integration.Configurations;
using HelpDesk.Tests.Integration.TestData;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace HelpDesk.Tests.Integration.Fixtures;

public sealed class HelpDeskApplicationFactory
    : WebApplicationFactory<ApplicationAssemblyMarker>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        // we are in the testing environment
        builder.UseEnvironment("Testing");

        var testConnectionString = IntegrationTestConfiguration.GetConnectionString();

        builder.ConfigureAppConfiguration((_, configuration) =>
        {
            configuration.AddInMemoryCollection(
                new Dictionary<string, string?>
                {
                    ["ConnectionStrings:AppDBConnection"] = testConnectionString,
                    ["DataImport:CountriesPath"] =
                        "Infrastructure/Services/DataIngestion/Importing/Importers/Countries/data/countries.json",
                    ["DataImport:TimeZonesPath"] =
                        "Infrastructure/Services/DataIngestion/Importing/Importers/Timezones/data/timezone-names.json"
                });
        });

        builder.ConfigureTestServices(services =>
        {
            services.RemoveAll<IDbContextOptionsConfiguration<AppDbContext>>();

            services.AddDbContext<AppDbContext>(
                options => options.UseSqlServer(testConnectionString));

            services.AddScoped<TestUserContext>();

            services.AddScoped<IUserContext>(sp =>
                sp.GetRequiredService<TestUserContext>());
        });
    }
}
