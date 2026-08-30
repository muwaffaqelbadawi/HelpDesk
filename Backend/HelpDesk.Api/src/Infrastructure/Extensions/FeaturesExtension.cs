namespace HelpDesk.src.Infrastructure.Extensions;

public static class FeaturesExtension
{
    public static WebApplicationBuilder AddFeatures(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddAuthServices(); // ✅
        builder.Services.AddDashboardServices(); // ✅
        builder.Services.AddEmployeeServices(); // ✅
        builder.Services.AddModulesServices(); // ✅
        builder.Services.AddPermissionsServices(); // ✅
        builder.Services.AddRolesServices(); // ✅
        builder.Services.AddTicketServices(); // ⚠️
        builder.Services.AddUserServices(); // ⚠️

        return builder;
    }
}
