using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Features.Auth.UserSession.SessionActivity;

public sealed record UserSessionActivityCommand(Guid SessionId) : ISystemCommand;
