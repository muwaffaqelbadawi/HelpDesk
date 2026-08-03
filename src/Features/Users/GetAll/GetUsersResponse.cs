using HelpDesk.src.Shared.Responses;

namespace HelpDesk.src.Features.Users.GetAll;

public sealed record GetUsersResponse(
    UserData UserData);