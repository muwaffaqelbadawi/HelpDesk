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
    public string FullEnName { get; set; } = null!;
    public string FullArName { get; set; } = null!;



    public string Number { get; set; } = null!;


    public Guid? StatusId { get; set; }
    public EmployeeStatus? Status { get; set; }

    public Guid? DepartmentId { get; set; }
    public Department? Department { get; set; }

    public Guid? BranchId { get; set; }
    public Branch? Branch { get; set; }


    public Guid? SectorId { get; set; }

    public Guid? PositionId { get; set; }

    public Guid? ProfessionId { get; set; }

    public Guid? CompanyId { get; set; }


    // Audit
    public Guid CreatedById { get; set; }

    //[NotMapped]
    public ApplicationUser CreatedBy { get; set; } = null!;
    public DateTimeOffset CreatedAt { get; set; }


    public Guid? UpdatedById { get; set; }
    public ApplicationUser? UpdatedBy { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }


    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }


    // IsDeleted (flag)
    // soft-delete flag
    public bool IsDeleted { get; set; }


    // Concurrency
    public byte[] RowVersion { get; set; } = null!;
}
