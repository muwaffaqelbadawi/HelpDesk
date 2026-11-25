namespace HelpDesk.src.Shared.Exceptions;

public sealed class UserNotFoundException : NotFoundException
{
    public UserNotFoundException()
        : base("User was not found.")
    {
    }
}
