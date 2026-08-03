namespace HelpDesk.src.Features.Admin;

public sealed record AdminCommand(
    string UserName,
    string Email,
    string RoleName);