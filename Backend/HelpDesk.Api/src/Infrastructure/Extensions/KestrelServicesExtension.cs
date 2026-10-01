using System.Security.Cryptography.X509Certificates;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class KestrelServicesExtension
{
    public static WebApplicationBuilder AddCustomKestrelServices(
        this WebApplicationBuilder builder)
    {
        if (builder.Environment.IsEnvironment("Testing"))
        {
            return builder;
        }

        var kestrelSection = builder.Configuration
            .GetSection("Kestrel:Certificates:Default");

        var pemPath = kestrelSection["Pem"];
        var keyPath = kestrelSection["Key"];

        if (string.IsNullOrWhiteSpace(pemPath) && string.IsNullOrWhiteSpace(keyPath))
        {
            return builder;
        }

        if (string.IsNullOrWhiteSpace(pemPath) || string.IsNullOrWhiteSpace(keyPath))
        {
            throw new InvalidOperationException(
                "Both Kestrel certificate PEM and key paths must be configured.");
        }

        var certificatePath = Path.GetFullPath(pemPath);
        var fullKeyPath = Path.GetFullPath(keyPath);

        if (!File.Exists(certificatePath))
        {
            throw new FileNotFoundException(
                 "Certificate was not found." +
                 "Expected file: dev_certificate/cert.pem in the repo root.",
                certificatePath);
        }

        if (!File.Exists(fullKeyPath))
        {
            throw new FileNotFoundException(
                 "Certificate key was not found." +
                 "Expected file: dev_certificate/key.pem in the repo root.",
                fullKeyPath);
        }

        var tempCert = X509Certificate2.CreateFromPemFile(certificatePath, fullKeyPath);

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
