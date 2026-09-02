using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Core;

public sealed class DataImportOptionsValidator
    : IValidateOptions<DataImportOptions>
{
    public ValidateOptionsResult Validate(
        string? name,
        DataImportOptions options)
    {
        if (string.IsNullOrWhiteSpace(options.RelativePath))
        {
            return ValidateOptionsResult.Fail(
                $"{nameof(options.RelativePath)} must be provided.");
        }

        if (Path.IsPathRooted(options.RelativePath))
        {
            return ValidateOptionsResult.Fail(
                $"{nameof(options.RelativePath)} must be relative to the application content root.");
        }

        return ValidateOptionsResult.Success;
    }
}
