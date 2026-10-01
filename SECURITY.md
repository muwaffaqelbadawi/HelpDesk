# Security Policy

## Supported Versions

This repository does not publish a supported-version matrix, release support window, or maintenance commitment. No release can therefore be identified here as formally supported.

## Reporting a Vulnerability

Please use GitHub's [private vulnerability reporting form](https://github.com/muwaffaqelbadawi/HelpDesk/security/advisories/new). Do not report an undisclosed vulnerability in a public issue, pull request, or discussion.

The repository does not publish a response-time commitment or coordinated-disclosure schedule. If the private reporting form is unavailable, no backup private contact channel is documented here; consult the [repository owner's GitHub profile](https://github.com/muwaffaqelbadawi) for any current private contact option. Do not post vulnerability details publicly while seeking a reporting channel.

## What to Include

Include the affected component or file, relevant runtime and dependency versions, deployment context, security impact and prerequisites, and clear reproduction steps. A minimal proof of concept is useful when it can be shared safely. Redact credentials, access or refresh tokens, personal information, and customer data; do not include active secrets or unnecessary sensitive data.

## Security Scope

Security reports may concern the ASP.NET Core API, ASP.NET Core Identity, JWT authentication and cookie-based access/refresh sessions, password and account-recovery flows, authorization and permissions, the Angular client's credentialed HTTP behavior, SQL Server persistence, Docker/container configuration, or GitHub Actions and dependency automation.

## Security Practices and Limits

- The API configures ASP.NET Core Identity password complexity, failed-login lockout, and unique email addresses. JWT validation checks the signing key, issuer, audience, and lifetime. Access and refresh tokens are issued in `HttpOnly`, `Secure`, `SameSite=Strict` cookies; refresh tokens are stored server-side and can be revoked.
- The API configures HTTPS redirection, credentialed CORS for configured origins, FluentValidation-based request validation, and centralized exception responses. These application settings do not guarantee that a particular deployment is correctly configured or exposed only over HTTPS.
- GitHub Actions runs CodeQL analysis for C# and JavaScript/TypeScript on pushes and pull requests to `main`, and on a weekly schedule. Dependabot is configured for weekly NuGet and npm dependency update checks. The repository does not configure a separate dependency-scanning workflow. The Angular workflow builds the client but does not run its tests.
- The root `dockerfile` builds the .NET API, runs unit tests before publishing, and uses a non-root ASP.NET runtime image. `docker-compose.yml` publishes SQL Server and Mailpit ports; restrict network access when running this configuration. The repository does not document a production hosting environment or deployment hardening standard.

These are descriptions of configured behavior, not a guarantee that the application or any deployment is free of vulnerabilities.

## Secrets and Sensitive Configuration

Do not commit production credentials, signing keys, tokens, connection strings, SMTP credentials, local environment files, or development certificates. Supply deployment values through an appropriate secret store or environment configuration. Treat any real credential already committed as exposed and rotate it.

`.env.example` documents SQL Server, API connection, JWT, and SMTP environment variables with placeholders; replace those values for local use instead of treating them as usable credentials. Angular environment files are client-side configuration and must not contain secrets.

The root `.gitignore` contains an `*.env` pattern and ignores `dev_certificate/`; it does not ignore `appsettings.Development.json`. The root `.dockerignore` excludes `.env` files, certificate/key files, `secrets.json`, development certificates, and generated output. However, it does not exclude `Backend/HelpDesk.Api/appsettings.Development.json`, which is tracked and contains a development JWT signing key. The root Docker build copies `Backend/` into its build context, so that file can enter the build and published image. Do not reuse its key; this build-context exposure should be addressed separately.

## Disclosure and Security Updates

Use the private reporting form above to coordinate disclosure. No response deadlines or disclosure timeline are published. Published advisories are available from the repository's [Security advisories](https://github.com/muwaffaqelbadawi/HelpDesk/security/advisories). Dependabot update pull requests and CodeQL results are surfaced through GitHub; no separate security-update announcement channel is documented.
