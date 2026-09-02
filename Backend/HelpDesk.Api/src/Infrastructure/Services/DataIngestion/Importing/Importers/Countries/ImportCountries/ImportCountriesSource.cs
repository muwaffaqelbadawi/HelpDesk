namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;

public sealed class ImportCountriesSource
{
    public string Name { get; init; } = null!;
    public string NameArabic { get; init; } = null!;
    public int M49Code { get; init; }
    public string Alpha2 { get; init; } = null!;
    public string Alpha3 { get; init; } = null!;
}
