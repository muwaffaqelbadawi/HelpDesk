using FluentValidation;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;

public sealed class ImportCountriesValidator : AbstractValidator<ImportCountriesCommand>
{
    public ImportCountriesValidator()
    {

    }
}
