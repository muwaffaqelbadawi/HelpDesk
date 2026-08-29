namespace HelpDesk.Infrastructure.Logging;

public static partial class SeederLogMessages
{
    [LoggerMessage(
       EventId = 1001,
       Level = LogLevel.Information,
       Message = "Seed for key: '{Key}' (Scope: {Scope}, Version: {Version}) already applied. Skipping.")]
    public static partial void SeedAlreadyApplied(
       this ILogger logger,
       string key,
       string scope,
       string version);

    [LoggerMessage(
       EventId = 1002,
       Level = LogLevel.Information,
       Message = "Applying seed for key: '{Key}' (Scope: {Scope}, Version: {Version}).")]
    public static partial void ApplyingSeed(
        this ILogger logger,
        string key,
        string scope,
        string version);

    [LoggerMessage(
       EventId = 1003,
       Level = LogLevel.Information,
       Message = "Successfully applied seed for key: '{Key}' (Scope: {Scope}, Version: {Version}).")]
    public static partial void SeedApplied(
        this ILogger logger,
        string key,
        string scope,
        string version);
}
