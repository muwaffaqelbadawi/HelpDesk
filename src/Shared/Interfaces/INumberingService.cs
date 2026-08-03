namespace HelpDesk.src.Shared.Interfaces;

public interface INumberingService
{
    Task<string> GetNextEmployeeNumberValueAsync(
        CancellationToken cancellationToken);

    Task<string> GetNextTicketNumberValueAsync(
        CancellationToken cancellationToken);
}
