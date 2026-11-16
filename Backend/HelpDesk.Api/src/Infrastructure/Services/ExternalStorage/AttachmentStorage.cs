using HelpDesk.src.Shared.Interfaces;
using Microsoft.Extensions.Options;

namespace HelpDesk.src.Infrastructure.Services.ExternalStorage;

public sealed class AttachmentStorage(
    IOptions<AttachmentStorageOptions> attachmentStorageOptions)
        : IAttachmentStorage
{
    public async Task<string> UploadAsync(
        Guid attachmentId,
        Stream file,
        CancellationToken cancellationToken)
    {
        var storageKey = $"{attachmentId}";
        var filePath = GetFilePath(storageKey);
        var fileCreated = false;

        try
        {
            await using var destination = new FileStream(
                filePath,
                FileMode.CreateNew,
                FileAccess.Write,
                FileShare.None,
                bufferSize: 81920,
                useAsync: true);

            fileCreated = true;

            await file.CopyToAsync(
                destination,
                cancellationToken);

            return storageKey;
        }
        catch
        {
            if (fileCreated)
            {
                try
                {
                    File.Delete(filePath);
                }
                catch
                {
                    // Log cleanup failure if a logger is available.
                }
            }

            throw;
        }
    }

    public Task DeleteAsync(
        string storageKey,
        CancellationToken cancellationToken)
    {
        var filePath = GetFilePath(storageKey);

        File.Delete(filePath);

        return Task.CompletedTask;
    }

    public Task<Stream> OpenReadAsync(
        string storageKey,
        CancellationToken cancellationToken)
    {
        cancellationToken.ThrowIfCancellationRequested();

        var filePath = GetFilePath(storageKey);

        if (!File.Exists(filePath))
        {
            throw new FileNotFoundException(
                "The requested attachment was not found.",
                storageKey);
        }

        Stream content = new FileStream(
            filePath,
            FileMode.Open,
            FileAccess.Read,
            FileShare.Read,
            bufferSize: 81920,
            options: FileOptions.Asynchronous | FileOptions.SequentialScan);

        return Task.FromResult(content);
    }

    private string GetFilePath(string storageKey)
    {
        var rootPath = attachmentStorageOptions.Value.RootPath;

        Directory.CreateDirectory(rootPath);

        return Path.Combine(rootPath, storageKey);
    }
}
