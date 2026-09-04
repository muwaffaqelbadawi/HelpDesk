using System.Security.Cryptography.X509Certificates;
using HelpDesk.src.Infrastructure.Services.Kestrel;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class KestrelServicesExtension
{
    public static WebApplicationBuilder AddCustomKestrelServices(
        this WebApplicationBuilder builder)
    {
        var kestrelSection = builder.Configuration.GetSection("Kestrel:Certificates:Default");

        var kestrelOptions = kestrelSection.Get<KestrelOptions>()
            ?? throw new InvalidOperationException("Kestrel certificate options are not configured. Expected configuration section 'Kestrel:Certificates:Default'.");

        var certificatePath = Path.GetFullPath(kestrelOptions.Pem);
        var keyPath = Path.GetFullPath(kestrelOptions.Key);

        if (!File.Exists(certificatePath))
        {
            throw new FileNotFoundException(
                 "Certificate was not found. Expected file: DevCertificate/cert.pem in the repo root.",
                certificatePath);
        }

        if (!File.Exists(keyPath))
        {
            throw new FileNotFoundException(
                 "Certificate key was not found. Expected file: DevCertificate/key.pem in the repo root.",
                keyPath);
        }

        var tempCert = X509Certificate2.CreateFromPemFile(certificatePath, keyPath);

        byte[] pfxBytes = tempCert.Export(X509ContentType.Pfx);

        tempCert.Dispose();

        var cert = X509CertificateLoader.LoadPkcs12(
            pfxBytes,
            password: null,
            X509KeyStorageFlags.DefaultKeySet);

        builder.WebHost.ConfigureKestrel(options =>
        {
            options.ConfigureHttpsDefaults(https =>
            {
                https.ServerCertificate = cert;
            });
        });

        return builder;
    }
}
