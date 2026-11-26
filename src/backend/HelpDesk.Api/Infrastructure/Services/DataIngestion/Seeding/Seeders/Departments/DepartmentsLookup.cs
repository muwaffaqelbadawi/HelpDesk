using HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Dtos;

namespace HelpDesk.Infrastructure.Services.DataIngestion.Seeding.Seeders.Departments;

public static class DepartmentsLookup
{
    public static IReadOnlyCollection<LookupSeed> Departments { get; } =
    [
        new(
            Id: DepartmentsIds.HumanResources,
            Name: "Human Resources",
            Code: "HR"),

        new(
            Id: DepartmentsIds.InformationTechnology,
            Name: "Information Technology",
            Code: "IT"),

        new(
            Id: DepartmentsIds.Finance,
            Name: "Finance",
            Code: "FIN"),

        new(
            Id: DepartmentsIds.Accounting,
            Name: "Accounting",
            Code: "ACC"),

        new(
            Id: DepartmentsIds.Operations,
            Name: "Operations",
            Code: "OPS"),

        new(
            Id: DepartmentsIds.Sales,
            Name: "Sales",
            Code: "SAL"),

        new(
            Id: DepartmentsIds.Marketing,
            Name: "Marketing",
            Code: "MKT"),

        new(
            Id: DepartmentsIds.CustomerService,
            Name: "Customer Service",
            Code: "CS"),

        new(
            Id: DepartmentsIds.Procurement,
            Name: "Procurement",
            Code: "PRC"),

        new(
            Id: DepartmentsIds.Legal,
            Name: "Legal",
            Code: "LEG"),

            new(
            Id: DepartmentsIds.Administration,
            Name: "Administration",
            Code: "ADM"),

        new(
            Id: DepartmentsIds.ResearchAndDevelopment,
            Name: "Research & Development",
            Code: "RND"),

        new(
            Id: DepartmentsIds.QualityAssurance,
            Name: "Quality Assurance",
            Code: "QA"),

        new(
            Id: DepartmentsIds.Compliance,
            Name: "Compliance",
            Code: "CMP"),

        new(
            Id: DepartmentsIds.Security,
            Name: "Security",
            Code: "SEC"),

        new(
            Id: DepartmentsIds.Logistics,
            Name: "Logistics",
            Code: "LOG"),

        new(
            Id: DepartmentsIds.SupplyChain,
            Name: "Supply Chain",
            Code: "SCM"),
    ];
}
