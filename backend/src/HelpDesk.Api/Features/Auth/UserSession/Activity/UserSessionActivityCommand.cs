using HelpDesk.Shared.Interfaces;

namespace HelpDesk.Features.Auth.UserSession.Activity;

public sealed record UserSessionActivityCommand(Guid SessionId) : ISystemCommand;
