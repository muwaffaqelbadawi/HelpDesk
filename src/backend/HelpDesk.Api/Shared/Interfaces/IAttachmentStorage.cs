namespace HelpDesk.Shared.Interfaces;

public interface IAttachmentStorage
{
    Task<string> UploadAsync(
        Guid attachmentId,
        Stream file,
        CancellationToken cancellationToken);

    Task DeleteAsync(
        string storageKey,
        CancellationToken cancellationToken);

    Task<Stream> OpenReadAsync(
        string storageKey,
        CancellationToken cancellationToken);
}
