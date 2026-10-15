namespace HelpDesk.src.Shared.Exceptions;

public sealed class ModuleNotFoundException : NotFoundException
{
    public ModuleNotFoundException(Guid moduleId)
        : base($"Module {moduleId} was not found")
    {
    }

    public ModuleNotFoundException(string message)
        : base(message)
    {
    }

    public ModuleNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
