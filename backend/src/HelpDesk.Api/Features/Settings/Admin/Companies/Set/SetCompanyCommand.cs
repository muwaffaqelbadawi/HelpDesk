namespace HelpDesk.Features.Settings.Admin.Companies.Set;

public sealed record SetCompanyCommand(
    Guid UserId,
    Guid CompanyId);
