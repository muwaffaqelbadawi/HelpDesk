namespace HelpDesk.src.Shared.Exceptions;

public sealed class EmployeeNotFoundException : NotFoundException
{
    public EmployeeNotFoundException(Guid employeeId)
        : base($"No employee associated with user: '{employeeId}'.")
    {
    }

    public EmployeeNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
