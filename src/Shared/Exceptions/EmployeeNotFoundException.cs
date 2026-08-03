namespace HelpDesk.src.Shared.Exceptions;

public sealed class EmployeeNotFoundException : NotFoundException
{
    public EmployeeNotFoundException(string employeeId)
        : base($"No employee associated with user: '{employeeId}'.")
    {
    }

    public EmployeeNotFoundException(string message, Exception innerException)
        : base(message, innerException)
    {
    }
}
