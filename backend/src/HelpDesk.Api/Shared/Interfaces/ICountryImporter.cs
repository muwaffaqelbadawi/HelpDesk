using HelpDesk.Infrastructure.Services.DataIngestion.Importing.Dtos;

namespace HelpDesk.Shared.Interfaces;

public interface ICountryImporter
{
    Task<ImportResult> ImportAsync(
        CancellationToken cancellationToken = default);
}
