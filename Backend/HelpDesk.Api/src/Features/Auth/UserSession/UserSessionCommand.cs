using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession;

public sealed record UserSessionCommand(
    ApplicationUser User,
    DateTimeOffset OccurredAt,
    bool StaySignedIn,
    Guid SessionId) : ISystemCommand;
