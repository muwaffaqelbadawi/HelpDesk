using HelpDesk.src.Infrastructure.Database.DbContext;
using HelpDesk.src.Shared.DataAccess.Dtos;
using HelpDesk.src.Shared.DataAccess.Queries;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.src.Shared.DataAccess.Readers;

public sealed class TicketAttachmentReader(AppDbContext dbContext) : ITicketAttachmentReader
{
    public async Task<TicketAttachmentData> GetByIdAsync(
        Guid ticketId,
        Guid attachmentId,
        CancellationToken cancellationToken = default)
    {
        return await dbContext.Tickets
            .AsNoTracking()
            .Where(t => t.Id == ticketId
                    && t.Comments.Any(c =>
                     c.Attachments.Any(a => a.Id == attachmentId)))
            .SelectTicketAttachmentData()
            .SingleAsync(cancellationToken);
    }
}
