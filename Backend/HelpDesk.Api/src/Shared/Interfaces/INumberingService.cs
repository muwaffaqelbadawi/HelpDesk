using HelpDesk.src.Infrastructure.Services.SQLServerSequence;

namespace HelpDesk.src.Shared.Interfaces;

public interface INumberingService
{
    Task<string> GetNextNumberAsync(
    NumberType type,
    CancellationToken cancellationToken);
}
