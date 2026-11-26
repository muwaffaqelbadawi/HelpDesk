using Microsoft.Extensions.Configuration;

namespace HelpDesk.Tests.Integration.Configurations;

public static class IntegrationTestConfiguration
{
    public static string GetConnectionString()
    {
        var configuration = new ConfigurationBuilder()
            .AddEnvironmentVariables()
            .Build();

        // It will be read from the environment variables
        // make sure to configure it in your profile

        return configuration.GetConnectionString("IntegrationTestConnection")
            ?? throw new InvalidOperationException(
                "Integration test connection string is not configured.");
    }
}
