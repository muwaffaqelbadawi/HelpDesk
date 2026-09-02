using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Core;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class DataImporterExtension
{
    public static WebApplicationBuilder AddDataImportOptionsConfigs(
       this WebApplicationBuilder builder)
    {
        builder.Services
            .AddOptions<DataImportOptions>()
            .Bind(builder.Configuration.GetSection("DataImport"))
            .ValidateOnStart();

        return builder;
    }

    public static WebApplicationBuilder AddDataImportOptions(
        this WebApplicationBuilder builder)
    {
        builder.AddDataImportOptionsConfigs();

        builder.Services.AddSingleton<
            IValidateOptions<DataImportOptions>,
            DataImportOptionsValidator>();

        return builder;
    }

    public static WebApplicationBuilder AddDataImporters(
        this WebApplicationBuilder builder)
    {
        builder.AddDataImportOptions();

        builder.Services.AddScoped<ICountryImporter, CountryImporter>();

        return builder;
    }
}
