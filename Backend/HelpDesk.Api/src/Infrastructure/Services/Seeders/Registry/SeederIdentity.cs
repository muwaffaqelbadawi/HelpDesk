namespace HelpDesk.src.Infrastructure.Services.Seeders.Registry;

public sealed record SeederIdentity(
    string Key,
    string Scope,
    string Version);