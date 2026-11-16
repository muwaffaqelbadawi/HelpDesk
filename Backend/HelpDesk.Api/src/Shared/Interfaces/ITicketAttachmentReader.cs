using HelpDesk.src.Shared.DataAccess.Dtos;

namespace HelpDesk.src.Shared.Interfaces;

public interface ITicketAttachmentReader
{
    Task<TicketAttachmentData> GetByIdAsync(
        Guid ticketId,
        Guid attachmentId,
        CancellationToken cancellationToken = default);
}
