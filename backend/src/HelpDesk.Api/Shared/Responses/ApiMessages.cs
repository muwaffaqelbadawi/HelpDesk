namespace HelpDesk.Shared.Responses;

public static class ApiMessages
{
    // Api info messages
    public const string ApiInfo = "HelpDesk API is running.";

    // Api health messages
    public const string ApiHealthy = "HelpDesk API is healthy.";

    // Authentication messages
    public const string PasswordChanged = "Password changed successfully.";
    public const string ForgotPassword = "If the email exists, a reset link has been sent.";
    public const string Login = "User logged in successfully.";
    public const string Logout = "User logged out successfully.";
    public const string LogoutAll = "User logged out from all devices successfully.";
    public const string TerminateAllOtherUserSessions =
        "All other sessions has terminated successfully";
    public const string TokenRefreshed = "Token refreshed successfully.";
    public const string PasswordReset = "Password reset successfully.";
    public const string RevokedTokens = "Access token revoked successfully.";

    // Role messages
    public const string RolesRetrieved = "Roles retrieved successfully.";
    public const string RoleAssigned = "Role assigned successfully.";
    public const string RoleUpdated = "Role updated successfully.";

    // Permission messages
    public const string PermissionsRetrieved = "Permissions retrieved successfully.";

    // Module messages
    public const string ModulesRetrieved = "Modules retrieved successfully.";

    // Ticket messages
    public const string TicketRetrieved = "Ticket retrieved successfully.";
    public const string TicketsRetrieved = "Tickets retrieved successfully.";
    public const string TicketSummary = "Ticket summary retrieved successfully.";
    public const string TicketAssigned = "Ticket assigned successfully.";
    public const string TicketCreated = "Ticket created successfully.";
    public const string TicketUpdated = "Ticket updated successfully.";

    // User messages
    public const string UsersRetrieved = "Users retrieved successfully.";
    public const string UserRetrieved = "User retrieved successfully.";
    public const string UsersCreated = "Users created successfully.";
    public const string UserTimeZoneSet = "User TimeZone set successfully.";
    public const string UserBranchSet = "User Branch set successfully.";
    public const string UserDepartmentSet = "User department set successfully.";
    public const string UserSectorSet = "User sector set successfully.";
    public const string UserCompanySet = "User company set successfully.";
    public const string UserCountrySet = "User country set successfully.";
    public const string UserPhoneNumberSet = "User phone number set successfully.";
    public const string UserPreferredLanguageSet =
        "User preferred language set successfully.";

    // Email messages
    public const string TestEmail = "Test email sent successfully.";

    // Data import messages
    public const string DataImported = "Data imported successfully.";

    // Exceptions
    public const string AuthenticationRequired = "Authentication is required.";
    public const string ValidationException = "One or more validation errors occurred.";

    // ----- Seeders -----
    public const string TimeZonesRetrieved = "All TimeZones retrieved successfully.";
    public const string LanguagesRetrieved = "All languages retrieved successfully.";
    public const string DepartmentsRetrieved = "All departments retrieved successfully.";
    public const string SectorsRetrieved = "All sectors retrieved successfully.";
    public const string CountriesRetrieved = "All countries retrieved successfully.";
    public const string BranchesRetrieved = "All branches retrieved successfully.";
    public const string CompaniesRetrieved = "All companies retrieved successfully.";
}
