using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.src.Infrastructure.SystemAccounts.Admin;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Runner;

public sealed class AdminSeedRunner : IAdminSeedRunner
{
    private readonly ICommandHandler<AdminCommand, AdminResponse> _handler;

    public AdminSeedRunner(
        ICommandHandler<AdminCommand, AdminResponse> handler)
    {
        _handler = handler;
    }

    public async Task BootstrapAsync(CancellationToken cancellationToken)
    {
        var command = new AdminCommand(
            UserName: "superadmin",
            Email: "superadmin@test.com",
            RoleId: RoleIds.SuperAdmin);

        await _handler.HandleAsync(command, cancellationToken);
    }
}
