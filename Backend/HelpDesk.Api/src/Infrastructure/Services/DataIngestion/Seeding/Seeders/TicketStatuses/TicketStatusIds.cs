namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;

public sealed class TicketStatusIds
{
    public static readonly Guid Open =
        new("3ADAD8B2-82C8-4602-A3C7-90DC7E231A45");

    public static readonly Guid Assigned =
        new("C42F526C-D8C7-4DB8-A5D7-B635D2FE2625");

    public static readonly Guid InProgress =
        new("B7AE70C5-2A88-4235-B3D3-39902B6FB9B5");

    public static readonly Guid Pending =
        new("AFFCD931-CBD0-4D43-9E87-F2CBAF700899");

    public static readonly Guid Resolved =
        new("02C2A541-F43C-4A3E-ADFB-113473FA7E3D");

    public static readonly Guid Closed =
        new("B955DA8C-9A6D-4C0A-BE17-EA1DBDDE7661");

    public static readonly Guid Cancelled =
        new("CDF402E4-BAFC-40B4-8EE5-56B3CBFBF078");

    public static readonly Guid Deleted =
        new("A79A53D6-4867-404B-A447-CEC15536DA9B");
}
