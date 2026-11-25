using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Companies.Set;

public sealed record CompanySetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
