using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Settings.Admin.Branches.Set;

public sealed record BranchSetEvent(
    ApplicationUser User,
    DateTimeOffset OccurredAt) : IDomainEvent;
