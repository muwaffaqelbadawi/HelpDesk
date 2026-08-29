namespace HelpDesk.src.Shared.Responses;

public static class ApiMessages
{
    // Api info messages
    public const string ApiInfo = "HelpDesk API is running.";

    // Api health messages
    public const string ApiHealthy = "HelpDesk API is healthy.";


    // Authentication messages
    public const string PasswordChanged = "Password changed successfully.";
    public const string ForgotPassword = "If the email exists, a reset link has been sent.";
    public const string ForgottenPasswordReset = "Your password has been reset successfully.";
    public const string Login = "User logged in successfully.";
    public const string Logout = "User logged out successfully.";
    public const string TokenRefreshed = "Token refreshed successfully.";
    public const string PasswordReset = "Password reset successfully.";
    public const string TokenRevoked = "Token revoked successfully.";
    public const string RevokedTokens = "All tokens revoked successfully.";


    // Role messages
    public const string RolesRetrieved = "Roles retrieved successfully.";
    public const string RoleRetrieved = "Role retrieved successfully.";
    public const string RoleAssigned = "Role assigned successfully.";
    public const string RoleUpdated = "Role updated successfully.";
    public const string RoleRemoved = "Role removed successfully.";

    // Permission messages
    public const string PermissionsRetrieved = "Permissions retrieved successfully.";

    // Ticket messages
    public const string TicketRetrieved = "Ticket retrieved successfully.";
    public const string TicketsRetrieved = "Tickets retrieved successfully.";
    public const string TicketAssigned = "Ticket assigned successfully.";
    public const string TicketCreated = "Ticket created successfully.";
    public const string TicketUpdated = "Ticket updated successfully.";

    // Employee messages
    public const string EmployeesRetrieved = "Employees retrieved successfully.";
    public const string EmployeeRetrieved = "Employee retrieved successfully.";
    public const string EmployeeCreated = "Employee created successfully.";
    public const string EmployeeUpdated = "Employee updated successfully.";

    // User messages
    public const string UsersRetrieved = "Users retrieved successfully.";
    public const string UserRetrieved = "User retrieved successfully.";
    public const string UsersCreated = "Users created successfully.";
    public const string UserUpdated = "User updated successfully.";

    // Email messages
    public const string TestEmail = "Test email sent successfully.";
}
