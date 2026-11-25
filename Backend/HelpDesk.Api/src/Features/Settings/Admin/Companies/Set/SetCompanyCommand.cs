namespace HelpDesk.src.Features.Settings.Admin.Companies.Set;

public sealed record SetCompanyCommand(
    Guid UserId,
    Guid CompanyId);
