namespace HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

public sealed class ApplicationTimeZone
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;
    public string Release { get; set; } = null!;

    public bool IsActive { get; set; }

    public ICollection<ApplicationUser> Users { get; set; } = [];
}