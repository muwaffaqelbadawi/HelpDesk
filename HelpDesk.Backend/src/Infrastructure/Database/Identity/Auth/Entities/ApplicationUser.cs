using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationUser : IdentityUser<Guid>
{
    // Auth.Users

    // Domain link
    public Guid? EmployeeId { get; set; }
    public Employee? Employee { get; set; }


    public Guid StatusId { get; set; }
    public ApplicationUserStatus Status { get; set; } = null!;


    // Password lifecycle
    public DateTimeOffset? LastPasswordChangedAt { get; set; }
    public Guid? LastPasswordChangedById { get; set; }


    // Flag set user must change their password
    public bool MustChangePassword { get; set; }


    // Login Tracking/Auditing
    public DateTimeOffset? LastLoginAt { get; set; }


    // Audit
    public Guid? CreatedById { get; set; }
    public ApplicationUser? CreatedBy { get; set; } = null!;
    public DateTimeOffset CreatedAt { get; set; }


    public Guid? UpdatedById { get; set; }
    public ApplicationUser? UpdatedBy { get; set; }
    public DateTimeOffset? UpdatedAt { get; set; }


    public Guid? LockedById { get; set; }
    public ApplicationUser? LockedBy { get; set; }
    public DateTimeOffset? LockedAt { get; set; }




    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }


    // IsDeleted (flag)
    // soft-delete flag
    public bool IsDeleted { get; set; }


    // Concurrency
    public byte[] RowVersion { get; set; } = null!;



    // UserRoles
    public ICollection<ApplicationUserRole> UserRoles { get; set; } = [];



    // RefreshTokens
    public ICollection<ApplicationRefreshToken> RefreshTokens { get; set; } = [];


    // Navigation properties for Tickets
    public ICollection<Ticket> CreatedTickets { get; set; }
        = new List<Ticket>();

    public ICollection<Ticket> AssignedByTickets { get; set; }
        = new List<Ticket>();

    public ICollection<Ticket> AssignedToTickets { get; set; }
        = new List<Ticket>();

    public ICollection<Ticket> UpdatedTickets { get; set; }
        = new List<Ticket>();

    public ICollection<Ticket> DeletedTickets { get; set; }
        = new List<Ticket>();

    public ICollection<Ticket> ClosedTickets { get; set; }
        = new List<Ticket>();



    // Navigation properties for Employees
    public ICollection<Employee> CreatedEmployees { get; set; }
        = new List<Employee>();

    public ICollection<Employee> UpdatedEmployees { get; set; }
        = new List<Employee>();

    public ICollection<Employee> DeletedEmployees { get; set; }
        = new List<Employee>();
}
