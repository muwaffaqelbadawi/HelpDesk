using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;

namespace HelpDesk.src.Shared.Interfaces;

public interface ICountryImporter
{
    Task<ImportResult> ImportAsync(
        CancellationToken cancellationToken = default);
}
