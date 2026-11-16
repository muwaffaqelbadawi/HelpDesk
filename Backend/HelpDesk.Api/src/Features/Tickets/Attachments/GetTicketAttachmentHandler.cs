using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.src.Shared.Exceptions;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Tickets.Attachments;

public sealed class GetTicketAttachmentHandler(
    IUserContext userContext,
    IRolesReader rolesReader,
    IDepartmentReader departmentReader,
    ITicketAttachmentReader ticketAttachmentReader,
    IAttachmentStorage attachmentStorage)
        : IQueryHandler<GetTicketAttachmentQuery, GetTicketAttachmentResponse>
{
    public async Task<GetTicketAttachmentResponse> HandleAsync(
        GetTicketAttachmentQuery query,
        CancellationToken cancellationToken)
    {
        var userId = userContext.GuidUserId;
        var attachmentId = query.AttachmentId;
        var ticketId = query.TicketId;

        var attachment = await ticketAttachmentReader.GetByIdAsync(
            ticketId: ticketId,
            attachmentId: attachmentId,
            cancellationToken: cancellationToken);

        if (attachment is null)
        {
            throw new ResourceNotFoundException(attachmentId);
        }

        // SuperAdmin: all tickets
        var isSuperAdmin = await HasRoleAsync(
            userId,
            RoleIds.SuperAdmin,
            cancellationToken);

        var isAuthorized = isSuperAdmin;

        // Admin: department scope
        if (!isAuthorized &&
            await HasRoleAsync(userId, RoleIds.Admin, cancellationToken))
        {
            var adminDepartmentId = await departmentReader.GetUserDepartmentIdAsync(
                userId,
                cancellationToken);

            isAuthorized =
                adminDepartmentId.HasValue &&
                attachment.TicketDepartmentId == adminDepartmentId;
        }

        // Support: assigned tickets
        if (!isAuthorized &&
            await HasRoleAsync(
                userId,
                RoleIds.Support,
                cancellationToken))
        {
            isAuthorized = attachment.TicketAssignedToId == userId;
        }

        // Customer: own tickets
        if (!isAuthorized &&
            await HasRoleAsync(
                userId,
                RoleIds.Customer,
                cancellationToken))
        {
            isAuthorized = attachment.TicketCreatedById == userId;
        }

        if (!isAuthorized)
        {
            throw new AuthorizationFailedException(
                userId,
                query.TicketId);
        }

        // Retrieve physical file
        var content = await attachmentStorage.OpenReadAsync(
            attachment.StorageKey,
            cancellationToken);

        return new GetTicketAttachmentResponse(
            Content: content,
            FileName: attachment.FileName,
            ContentType: attachment.ContentType);
    }

    private async Task<bool> HasRoleAsync(
        Guid userId,
        Guid roleId,
        CancellationToken cancellationToken)
    {
        return await rolesReader.GetAssignedRoleAsync(
            userId,
            roleId,
            cancellationToken) is not null;
    }
}
