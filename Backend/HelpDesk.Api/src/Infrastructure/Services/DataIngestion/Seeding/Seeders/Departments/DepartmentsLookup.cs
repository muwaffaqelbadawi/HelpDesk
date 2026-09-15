using HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;

public static class DepartmentsLookup
{
    public static IReadOnlyCollection<LookupSeed> Departments { get; } =
    [
        new(
            Id: DepartmentsIds.HumanResources,
            Name: "Human Resources",
            Code: "HR",
            SortOrder: 0),

        new(
            Id: DepartmentsIds.InformationTechnology,
            Name: "Information Technology",
            Code: "IT",
            SortOrder: 1),

        new(
            Id: DepartmentsIds.Finance,
            Name: "Finance",
            Code: "FIN",
            SortOrder: 2),

        new(
            Id: DepartmentsIds.Accounting,
            Name: "Accounting",
            Code: "ACC",
            SortOrder: 3),

        new(
            Id: DepartmentsIds.Operations,
            Name: "Operations",
            Code: "OPS",
            SortOrder: 4),

        new(
            Id: DepartmentsIds.Sales,
            Name: "Sales",
            Code: "SAL",
            SortOrder: 5),

        new(
            Id: DepartmentsIds.Marketing,
            Name: "Marketing",
            Code: "MKT",
            SortOrder: 6),

        new(
            Id: DepartmentsIds.CustomerService,
            Name: "Customer Service",
            Code: "CS",
            SortOrder: 7),

        new(
            Id: DepartmentsIds.Procurement,
            Name: "Procurement",
            Code: "PRC",
            SortOrder: 8),

        new(
            Id: DepartmentsIds.Legal,
            Name: "Legal",
            Code: "LEG",
            SortOrder: 9),

            new(
            Id: DepartmentsIds.Administration,
            Name: "Administration",
            Code: "ADM",
            SortOrder: 10),

        new(
            Id: DepartmentsIds.ResearchAndDevelopment,
            Name: "Research & Development",
            Code: "RND",
            SortOrder: 11),

        new(
            Id: DepartmentsIds.QualityAssurance,
            Name: "Quality Assurance",
            Code: "QA",
            SortOrder: 12),

        new(
            Id: DepartmentsIds.Compliance,
            Name: "Compliance",
            Code: "CMP",
            SortOrder: 13),

        new(
            Id: DepartmentsIds.Security,
            Name: "Security",
            Code: "SEC",
            SortOrder: 14),

        new(
            Id: DepartmentsIds.Logistics,
            Name: "Logistics",
            Code: "LOG",
            SortOrder: 15),

        new(
            Id: DepartmentsIds.SupplyChain,
            Name: "Supply Chain",
            Code: "SCM",
            SortOrder: 16),
    ];
}
