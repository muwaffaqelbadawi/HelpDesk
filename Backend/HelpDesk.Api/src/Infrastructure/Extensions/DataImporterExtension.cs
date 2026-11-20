using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Core;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.TimeZones.ImportTimeZones;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DataImporterExtension
{
    public static WebApplicationBuilder AddDataImportOptionsConfigs(
       this WebApplicationBuilder builder)
    {
        builder.Services
            .AddOptions<CountryImportOptions>()
            .Bind(builder.Configuration.GetSection("DataImport"))
            .ValidateOnStart();

        builder.Services
            .AddOptions<TimeZonesImportOptions>()
            .Bind(builder.Configuration.GetSection("DataImport"))
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddDataImportOptions(
        this WebApplicationBuilder builder)
    {
        builder.AddDataImportOptionsConfigs();

        builder.Services.AddSingleton<
            IValidateOptions<CountryImportOptions>,
            CountryOptionsValidator>();

        builder.Services.AddSingleton<
            IValidateOptions<TimeZonesImportOptions>,
            TimeZonesOptionsValidator>();

        return builder;
    }

    public static WebApplicationBuilder AddDataImporters(
        this WebApplicationBuilder builder)
    {
        builder.AddDataImportOptions();

        // Register CountryImporter as a scoped service
        builder.Services.AddScoped<ICountryImporter, CountryImporter>();

        // Register TimeZonesImporter as a scoped service
        builder.Services.AddScoped<ITimeZonesImporter, TimeZonesImporter>();

        return builder;
    }
}
