using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class SeedAdminServiceExtension
{
    public static async Task<WebApplication> SeedAdminAsync(
        this WebApplication app,
        CancellationToken cancellationToken = default)
    {
        using var scope = app.Services.CreateScope();

        var bootstrapper = scope.ServiceProvider.GetRequiredService<IAdminSeedRunner>();

        await bootstrapper.BootstrapAsync(cancellationToken);

        return app;
    }
}
