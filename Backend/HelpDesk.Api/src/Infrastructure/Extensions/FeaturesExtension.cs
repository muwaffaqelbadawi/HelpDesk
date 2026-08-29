namespace HelpDesk.src.Infrastructure.Extensions;

public static class FeaturesExtension
{
    public static WebApplicationBuilder AddFeatures(
        this WebApplicationBuilder builder)
    {
        builder.Services.AddAdminServices();
        builder.Services.AddAuthServices();
        builder.Services.AddDashboardServices();
        builder.Services.AddEmailServices(builder);
        builder.Services.AddEmployeeServices();
        builder.Services.AddModulesServices();
        builder.Services.AddPermissionsServices();
        builder.Services.AddRolesServices();
        builder.Services.AddTicketServices();
        builder.Services.AddUserServices();
        builder.Services.AddFrontendCors(builder);

        return builder;
    }
}
