namespace HelpDesk.src.Infrastructure.Services.DataIngestion.Seeding.Registry;

public sealed record SeederIdentity(
    string Key,
    string Scope,
    string Version);