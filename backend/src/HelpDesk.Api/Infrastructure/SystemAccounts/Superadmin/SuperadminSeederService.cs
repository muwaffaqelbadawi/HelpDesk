using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Infrastructure.SystemAccounts.Superadmin;

public sealed class SuperadminSeederService(
    ICommandHandler<SuperadminCommand, SuperadminResponse> handler)
        : ISeederService
{
    public int Order => DataSeederOrder.Superadmin;

    public async Task SeedAsync(CancellationToken cancellationToken = default)
    {
        var command = new SuperadminCommand(
            UserName: "superadmin",
            Email: "superadmin@helpdesk.com",
            RoleId: RoleIds.SuperAdmin);

        await handler.HandleAsync(command, cancellationToken);
    }
}
