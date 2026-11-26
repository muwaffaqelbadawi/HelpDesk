using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Departments.Set;

public sealed record DepartmentSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
