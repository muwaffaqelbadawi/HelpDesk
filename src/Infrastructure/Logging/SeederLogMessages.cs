namespace HelpDesk.Infrastructure.Logging;

public static partial class SeederLogMessages
{
    [LoggerMessage(
       EventId = 1001,
       Level = LogLevel.Information,
       Message = "Seed '{Key}' (Version: {Version}, Scope: {Scope}) already applied. Skipping.")]
    public static partial void SeedAlreadyApplied(
       this ILogger logger,
       string key,
       string version,
       string scope);

    [LoggerMessage(
       EventId = 1002,
       Level = LogLevel.Information,
       Message = "Applying seed '{Key}' (Version: {Version}, Scope: {Scope}).")]
    public static partial void ApplyingSeed(
        this ILogger logger,
        string key,
        string version,
        string scope);

    [LoggerMessage(
       EventId = 1003,
       Level = LogLevel.Information,
       Message = "Successfully applied seed '{Key}' (Version: {Version}, Scope: {Scope}).")]
    public static partial void SeedApplied(
        this ILogger logger,
        string key,
        string version,
        string scope);
}
