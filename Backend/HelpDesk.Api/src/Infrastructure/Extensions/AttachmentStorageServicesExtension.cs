using HelpDesk.src.Infrastructure.Services.ExternalStorage;
using HelpDesk.src.Shared.Interfaces;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class AttachmentStorageServicesExtension
{
    public static WebApplicationBuilder AddAttachmentStorage(
       this WebApplicationBuilder builder)
    {
        builder.Services
            .AddOptions<AttachmentStorageOptions>()
            .Bind(builder.Configuration.GetSection("AttachmentStorage"))
            .Validate(
                options => !string.IsNullOrWhiteSpace(options.RootPath),
                "AttachmentStorage:RootPath must be configured.")
            .ValidateOnStart();

        // Register the AttachmentStorage as a scoped service
        builder.Services.AddScoped<IAttachmentStorage, AttachmentStorage>();

        return builder;
    }
}
