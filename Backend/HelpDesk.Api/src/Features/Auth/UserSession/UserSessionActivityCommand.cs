using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession;

public sealed record UserSessionActivityCommand(Guid SessionId) : ISystemCommand;
