using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class Language
{
    public Guid Id { get; set; }

    public string Code { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string NormalizedName { get; set; } = null!;
    public bool IsActive { get; set; }

    // Navigation property
    public ICollection<Employee> Employees { get; set; } = [];
    public ICollection<ApplicationUser> Users { get; set; } = [];
}
