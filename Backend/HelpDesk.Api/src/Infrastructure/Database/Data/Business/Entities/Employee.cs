using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class Employee
{
    // Business.Employees

    // Key
    public Guid Id { get; set; }


    // User
    public Guid UserId { get; set; }
    public ApplicationUser User { get; set; } = null!;


    // Domain link
    public string? PhotoUrl { get; set; }
    public string FullEnName { get; set; } = null!;
    public string? FullArName { get; set; } = null!;
    public string Number { get; set; } = null!;


    // Department
    public Guid? DepartmentId { get; set; }
    public Department? Department { get; set; }


    // Country information
    public Guid CountryId { get; set; }
    public Country Country { get; set; } = null!;


    // Job
    public string? JobTitle { get; set; }


    // Branch
    public Guid? BranchId { get; set; }
    public Branch? Branch { get; set; }


    // Sector
    public Guid? SectorId { get; set; }
    public Sector? Sector { get; set; } = null!;


    // Company
    public Guid? CompanyId { get; set; }
    public Company? Company { get; set; } = null!;


    // Audit
    public Guid CreatedById { get; set; }

    public ApplicationUser CreatedBy { get; set; } = null!;
    public DateTimeOffset CreatedAt { get; set; }


    public Guid? UpdatedById { get; set; }
    public ApplicationUser? UpdatedBy { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }


    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; }


    // Concurrency
    public byte[] RowVersion { get; set; } = null!;
}
