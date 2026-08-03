namespace HelpDesk.src.Shared.Exceptions;

public sealed class RoleNotFoundException : NotFoundException
{
    public RoleNotFoundException(string roleName)
        : base($"Role '{roleName}' was not found.")
    {
    }

    public RoleNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
