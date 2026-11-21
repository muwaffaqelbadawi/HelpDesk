using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Branches;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Companies;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Languages;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Modules;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Permissions;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.RolePermissionModules;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Roles;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Sectors;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketPriorities;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.TicketStatuses;
using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.UserStatuses;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;

public static class SeedRegistry
{
    public static readonly SeederIdentity Permissions =
        new(
            Key: Keys.Permissions,
            Scope: nameof(PermissionSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Roles =
        new(
            Key: Keys.Roles,
            Scope: nameof(RoleSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Modules =
       new(
           Key: Keys.Modules,
           Scope: nameof(ModuleSeederService),
           Version: Versions.One);

    public static readonly SeederIdentity RolePermissionModules =
        new(
            Key: Keys.RolePermissionModules,
            Scope: nameof(RolePermissionModulesSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity UserStatuses =
        new(
            Key: Keys.UserStatuses,
            Scope: nameof(UserStatusSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Departments =
        new(
            Key: Keys.Departments,
            Scope: nameof(DepartmentSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Branches =
        new(
            Key: Keys.Branches,
            Scope: nameof(BranchSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Sectors =
        new(
            Key: Keys.Sectors,
            Scope: nameof(SectorSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Companies =
        new(
            Key: Keys.Companies,
            Scope: nameof(CompanySeederService),
            Version: Versions.One);

    public static readonly SeederIdentity TicketStatuses =
        new(
            Key: Keys.TicketStatuses,
            Scope: nameof(TicketStatusSeederService),
            Version: Versions.One);

    public static readonly SeederIdentity TicketPriorities =
        new(
            Key: Keys.TicketPriorities,
            Scope: nameof(TicketPrioritySeederService),
            Version: Versions.One);

    public static readonly SeederIdentity Languages =
        new(
            Key: Keys.Languages,
            Scope: nameof(LanguageSeederService),
            Version: Versions.One);
}
