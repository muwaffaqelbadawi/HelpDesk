using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;
using Microsoft.AspNetCore.Identity;

namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationUser : IdentityUser<Guid>
{
    // Auth.Users

    // Domain link


    public Guid StatusId { get; set; }
    public ApplicationUserStatus Status { get; set; } = null!;


    // Password lifecycle
    public DateTimeOffset? LastPasswordChangedAt { get; set; }
    public Guid? LastPasswordChangedById { get; set; }


    // Flag set user must change their password
    public bool MustResetPassword { get; set; }


    // Login Tracking/Auditing
    public DateTimeOffset? LastLoginAt { get; set; }
    public DateTimeOffset? LastFailedLoginAt { get; set; }
    public int FailedLoginCount { get; set; }


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


    // Delete
    public Guid? DeletedById { get; set; }
    public ApplicationUser? DeletedBy { get; set; }
    public DateTimeOffset? DeletedAt { get; set; }
    public bool IsDeleted { get; set; }


    // Profile
    public string TimeZone { get; set; } = null!;
    public UserLanguage PreferredLanguage { get; set; }


    // Concurrency
    public byte[] RowVersion { get; set; } = null!;


    // UserRoles
    public ICollection<ApplicationUserRole> UserRoles { get; set; } = [];


    // RefreshTokens
    public ICollection<ApplicationRefreshToken> RefreshTokens { get; set; } = [];


    // Tickets
    public ICollection<Ticket> CreatedTickets { get; set; } = [];
    public ICollection<Ticket> AssignedByTickets { get; set; } = [];
    public ICollection<Ticket> AssignedToTickets { get; set; } = [];
    public ICollection<Ticket> UpdatedTickets { get; set; } = [];
    public ICollection<Ticket> DeletedTickets { get; set; } = [];
    public ICollection<Ticket> ClosedTickets { get; set; } = [];


    // Employees

    public Employee? Employee { get; set; }
    public ICollection<Employee> CreatedEmployees { get; set; } = [];
    public ICollection<Employee> UpdatedEmployees { get; set; } = [];
    public ICollection<Employee> DeletedEmployees { get; set; } = [];


    // Navigation properties

    public ICollection<ApplicationUserSession> Sessions { get; set; } = [];
    public ICollection<ApplicationUserHistory> Histories { get; set; } = [];
}
