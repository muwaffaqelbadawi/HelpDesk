namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class Branch
{
    public Guid Id { get; set; }
    public string Code { get; set; } = null!;
    public string Name { get; set; } = null!;
    public string NormalizedName { get; set; } = null!;
    public bool IsActive { get; set; }
    public int SortOrder { get; set; }

    // Navigation property
    public ICollection<Employee> Employees { get; set; } = [];

}
