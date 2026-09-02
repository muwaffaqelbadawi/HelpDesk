using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Dtos;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Importing.Importers.Countries.ImportCountries;
using HelpDesk.src.Shared.Interfaces;
using HelpDesk.src.Shared.Responses;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.DataImport;

[ApiController]
[Route("import-data")]
public sealed class DataImportController : ControllerBase
{
    [HttpPost("countries")]
    public async Task<IActionResult> ImportCountries(
        [FromServices] ICommandHandler<ImportCountriesCommand, ImportResult> handler,
        [FromServices] IDateTimeService dateTimeService,
        CancellationToken cancellationToken)
    {
        var command = new ImportCountriesCommand();

        var result = await handler.HandleAsync(
            command,
            cancellationToken);

        return Ok(new ApiResponse<ImportResult>(
            message: ApiMessages.DataImported,
            time: dateTimeService.UtcNow,
            data: result));
    }
}
