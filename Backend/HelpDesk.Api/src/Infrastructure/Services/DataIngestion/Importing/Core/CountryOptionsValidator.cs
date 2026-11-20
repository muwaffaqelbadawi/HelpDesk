using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Core;

public sealed class CountryOptionsValidator : IValidateOptions<CountryImportOptions>
{
    public ValidateOptionsResult Validate(
        string? name,
        CountryImportOptions options)
    {
        if (string.IsNullOrWhiteSpace(options.CountriesPath))
        {
            return ValidateOptionsResult.Fail(
                $"{nameof(options.CountriesPath)} must be provided.");
        }

        if (Path.IsPathRooted(options.CountriesPath))
        {
            return ValidateOptionsResult.Fail(
                $"{nameof(options.CountriesPath)}" +
                $"must be relative to the application content root.");
        }

        return ValidateOptionsResult.Success;
    }
}
