using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Companies.Set;

public sealed record CompanySetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
