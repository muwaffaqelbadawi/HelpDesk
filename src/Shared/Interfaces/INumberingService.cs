using HelpDesk.src.Infrastructure.Database.Data.Business.BusinessSchemas;

namespace HelpDesk.src.Shared.Interfaces;

public interface INumberingService
{
    Task<string> GetNextNumberAsync(
    NumberType type,
    CancellationToken cancellationToken);
}
