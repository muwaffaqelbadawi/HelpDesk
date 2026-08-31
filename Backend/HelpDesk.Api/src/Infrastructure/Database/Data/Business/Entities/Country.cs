namespace HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

public sealed class Country
{
    public Guid Id { get; set; }

    public string M49Code { get; set; } = null!;

    public string Alpha2Code { get; set; } = null!;

    public string Alpha3Code { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string NameArabic { get; set; } = null!;

    public bool IsActive { get; set; }
}
