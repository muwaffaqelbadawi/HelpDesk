using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession.Activity;

public sealed record UserSessionActivityCommand(Guid SessionId) : ISystemCommand;
