using Microsoft.Extensions.Options;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Importing.Core;

public sealed class TimeZonesOptionsValidator : IValidateOptions<TimeZonesImportOptions>
{
    public ValidateOptionsResult Validate(
        string? name,
        TimeZonesImportOptions options)
    {
        if (string.IsNullOrWhiteSpace(options.TimeZonesPath))
        {
            return ValidateOptionsResult.Fail(
                $"{nameof(options.TimeZonesPath)} must be provided.");
        }

        if (Path.IsPathRooted(options.TimeZonesPath))
        {
            return ValidateOptionsResult.Fail(
                $"{nameof(options.TimeZonesPath)}" +
                $"must be relative to the application content root.");
        }

        return ValidateOptionsResult.Success;
    }
}
