namespace HelpDesk.src.Shared.Exceptions;

public class ResourceNotFoundException : NotFoundException
{
    public ResourceNotFoundException(Guid resourceId)
        : base($"Resource with ID {resourceId} not found.")
    {
    }

    public ResourceNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
