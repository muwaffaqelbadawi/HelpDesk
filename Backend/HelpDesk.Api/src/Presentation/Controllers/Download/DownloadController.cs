using HelpDesk.src.Features.Tickets.Attachments;
using HelpDesk.src.Shared.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HelpDesk.src.Presentation.Controllers.Download;

[ApiController]
[Authorize]
public sealed class DownloadController : ControllerBase
{
    // Download ticket attachment
    [HttpGet("api/me/tickets/{ticketId:guid}/attachments/{attachmentId:guid}")]
    public async Task<IActionResult> GetTicketAttachment(
        [FromServices] IQueryHandler<GetTicketAttachmentQuery, GetTicketAttachmentResponse> handler,
        [FromRoute] Guid ticketId,
        [FromRoute] Guid attachmentId,
        CancellationToken cancellationToken)
    {
        var query = new GetTicketAttachmentQuery(
            TicketId: ticketId,
            AttachmentId: attachmentId);

        var result = await handler.HandleAsync(
            query,
            cancellationToken);

        return File(
            result.Content,
            result.ContentType,
            result.FileName);
    }
}
