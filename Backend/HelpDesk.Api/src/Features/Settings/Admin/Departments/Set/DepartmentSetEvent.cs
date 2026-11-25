using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Departments.Set;

public sealed record DepartmentSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
