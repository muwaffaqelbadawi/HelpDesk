using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Users.GetCurrent;

public sealed record CurrentUserResponse(
    UserData UserData,
     IReadOnlyCollection<string> Roles);