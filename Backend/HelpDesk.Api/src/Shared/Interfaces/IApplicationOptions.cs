using HelpDesk.src.Infrastructure.Database.Identity.Auth.Entities;

namespace HelpDesk.src.Shared.Interfaces;

public interface IApplicationOptions
{
    string DefaultTimeZone { get; }
    UserLanguage DefaultLanguage { get; }
}