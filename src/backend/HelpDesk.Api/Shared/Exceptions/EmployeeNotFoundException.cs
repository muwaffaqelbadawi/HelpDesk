namespace HelpDesk.Shared.Exceptions;

public sealed class EmployeeNotFoundException : InvalidOperationException
{
    public EmployeeNotFoundException()
        : base("The user does not have an associated employee record.")
    {
    }
}
