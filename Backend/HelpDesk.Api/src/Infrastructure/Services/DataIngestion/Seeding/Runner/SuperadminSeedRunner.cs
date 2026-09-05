using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;

public sealed class SuperadminSeedRunner(
    ICommandHandler<SuperadminCommand, SuperadminResponse> handler)
        : ISuperadminSeedRunner
{
    public async Task BootstrapAsync(
        CancellationToken cancellationToken)
    {
        var command = new SuperadminCommand(
            UserName: "superadmin",
            Email: "superadmin@test.com",
            RoleId: RoleIds.SuperAdmin);

        await handler.HandleAsync(command, cancellationToken);
    }
}
