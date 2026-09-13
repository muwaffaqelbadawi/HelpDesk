using HelpDesk.src.Shared.AssemblyMarker;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.Tests.Integration.Configurations;
using HelpDesk.Tests.Integration.TestDoubles;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
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
                    ["ConnectionStrings:AppDBConnection"] = testConnectionString
                });
        });

        builder.ConfigureTestServices(services =>
        {
            services.AddScoped<TestUserContext>();
            services.AddScoped<IUserContext>(sp =>
                sp.GetRequiredService<TestUserContext>());
        });
    }
}
