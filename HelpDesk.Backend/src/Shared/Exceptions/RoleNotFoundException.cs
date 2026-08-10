namespace HelpDesk.src.Shared.Exceptions;

public sealed class RoleNotFoundException : NotFoundException
{
    public RoleNotFoundException(Guid roleId)
        : base($"Role '{roleId}' was not found.")
    {
    }

    public RoleNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
