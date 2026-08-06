using HelpDesk.src.Infrastructure.Database.Data.Business.Entities;

namespace HelpDesk.src.Shared.Responses;

public static class UserResponseFactory
{
    public static EmployeeData? CreateEmployee(
        Employee? employee)
    {
        return employee is null
            ? null
            : new EmployeeData
            {
                FullEnName = employee.FullEnName,
                FullArName = employee.FullArName,
                RowVersion = employee.RowVersion
            };
    }
}