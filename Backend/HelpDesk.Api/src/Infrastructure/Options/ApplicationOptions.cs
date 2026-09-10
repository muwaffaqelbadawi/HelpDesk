using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Options;

public sealed class ApplicationOptions : IApplicationOptions
{
    public string DefaultTimeZone => "Asia/Riyadh";
    public UserLanguage DefaultLanguage => UserLanguage.English;
}
