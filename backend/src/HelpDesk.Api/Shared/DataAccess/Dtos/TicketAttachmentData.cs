namespace HelpDesk.Shared.DataAccess.Dtos;

public sealed class TicketAttachmentData
{
    // Parent ticket information
    public Guid TicketId { get; init; }

    public Guid TicketCreatedById { get; init; }

    public Guid? TicketAssignedToId { get; init; }

    public Guid? TicketDepartmentId { get; init; }

    // Attachment information
    public Guid AttachmentId { get; init; }

    public Guid TicketCommentId { get; init; }

    public string FileName { get; init; } = null!;

    public string ContentType { get; init; } = null!;

    public long Size { get; init; }

    public string StorageKey { get; init; } = null!;

    public Guid UploadedById { get; init; }

    public DateTimeOffset UploadedAt { get; init; }
}
