namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class EmployeeAvailability
{
    public Guid Id { get; set; }

    public Guid EmployeeId { get; set; }

    public AvailabilityReason Reason { get; set; }

    public DateTimeOffset StartsAt { get; set; }

    public DateTimeOffset EndsAt { get; set; }

    public string? Message { get; set; }

    public bool IsDeleted { get; set; }

    public Employee Employee { get; set; } = null!;
}