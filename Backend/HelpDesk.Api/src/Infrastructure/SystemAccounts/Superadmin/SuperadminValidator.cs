using FluentValidation;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;

namespace HelpDesk.src.Infrastructure.SystemAccounts.Superadmin;

public sealed class SuperadminValidator : AbstractValidator<ImportCountriesCommand>
{
    public SuperadminValidator()
    {

    }
}
