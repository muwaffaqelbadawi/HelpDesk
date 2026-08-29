using System.Security.Cryptography.X509Certificates;

namespace HelpDesk.src.Infrastructure.Extensions;

public static class KestrelServicesExtension
{
    public static WebApplicationBuilder AddCustomKestrelServices(
        this WebApplicationBuilder builder)
    {
        // Load the PEM certificate and convert it to PFX format
        var certPath = builder.Configuration["Kestrel:Certificates:Default:Pem"];

        if (string.IsNullOrWhiteSpace(certPath))
            throw new InvalidOperationException("Kestrel certificate PEM path is not configured. Expected configuration key 'Kestrel:Certificates:Default:Pem'.");

        var keyPath = builder.Configuration["Kestrel:Certificates:Default:Key"];

        if (string.IsNullOrWhiteSpace(keyPath))
            throw new InvalidOperationException("Kestrel certificate key path is not configured. Expected configuration key 'Kestrel:Certificates:Default:Key'.");

        // Create a temporary X509Certificate2 object from the PEM files
        var tempCert = X509Certificate2.CreateFromPemFile(certPath, keyPath);

        // Export the certificate to PFX format (PKCS#12)
        byte[] pfxBytes = tempCert.Export(X509ContentType.Pfx);

        // Dispose the temporary certificate as it's no longer needed
        tempCert.Dispose();

        // Load the PFX certificate into an X509Certificate2 object
        var cert = X509CertificateLoader.LoadPkcs12(
            pfxBytes,
            password: null,
            X509KeyStorageFlags.DefaultKeySet);

        // Configure Kestrel to use the loaded certificate for HTTPS
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
