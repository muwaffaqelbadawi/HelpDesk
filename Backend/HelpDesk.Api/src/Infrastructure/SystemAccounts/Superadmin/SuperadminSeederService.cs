using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed class SuperadminSeederService(
    ICommandHandler<SuperadminCommand, SuperadminResponse> handler)
        : ISeederService
{
    public int Order => DataSeederOrder.Superadmin;

    public async Task SeedAsync(CancellationToken cancellationToken = default)
    {
        var command = new SuperadminCommand(
            UserName: "superadmin",
            Email: "superadmin@test.com",
            RoleId: RoleIds.SuperAdmin);

        await handler.HandleAsync(command, cancellationToken);
    }
}
