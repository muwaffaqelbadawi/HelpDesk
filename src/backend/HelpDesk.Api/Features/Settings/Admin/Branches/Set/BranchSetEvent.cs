using HelpDesk.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Settings.Admin.Branches.Set;

public sealed record BranchSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
