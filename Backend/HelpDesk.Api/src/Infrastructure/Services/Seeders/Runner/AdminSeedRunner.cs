using HelpDesk.src.Features.Admin;
using HelpDesk.src.Infrastructure.Services.Seeders.Seeds.Roles;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Services.Seeders.Runner;

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
