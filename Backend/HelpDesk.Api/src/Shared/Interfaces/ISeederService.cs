namespace HelpDesk.src.Shared.Interfaces;

public interface ISeederService
{
    int Order { get; }

    Task SeedAsync(CancellationToken cancellationToken = default);
}
