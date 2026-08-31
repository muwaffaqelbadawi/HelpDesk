namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;

public static class RoleIds
{
    public static readonly Guid SuperAdmin =
        new("AA6C65CD-B6E4-4C43-A223-91E43BBCE56C");

    public static readonly Guid Admin =
        new("3274B5DB-C03F-4BB4-AA1E-F6EEED79B890");

    public static readonly Guid Support =
        new("F6933762-B9E9-403A-BD6E-23A7EA3101F4");

    public static readonly Guid Agent =
        new("BAF3C1B8-9279-4549-90A3-3D9AEC9C225C");
}
