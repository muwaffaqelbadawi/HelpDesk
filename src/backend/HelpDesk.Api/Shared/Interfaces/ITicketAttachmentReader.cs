using HelpDesk.Shared.DataAccess.Dtos;

namespace HelpDesk.Shared.Interfaces;

public interface ITicketAttachmentReader
{
    Task<TicketAttachmentData> GetByIdAsync(
        Guid ticketId,
        Guid attachmentId,
        CancellationToken cancellationToken = default);
}
