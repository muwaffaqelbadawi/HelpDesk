namespace HelpDesk.src.Shared.Interfaces;


public interface INumberingService
{
    Task<string> GetNextTicketNumberAsync(
        CancellationToken cancellationToken);

    Task<string> GetNextEmployeeNumberAsync(
        CancellationToken cancellationToken);
}
