# HelpDesk Skill Guide

Repository guidance for changes to the HelpDesk API, Angular client, tests, and CI. This is an enterprise help-desk application for ticket and user-account management.

## Repository layout

- `Backend/HelpDesk.Api/`: ASP.NET Core Web API. `Program.cs` delegates service and middleware setup to `src/Infrastructure/Extensions`.
- `Backend/HelpDesk.Api/src/Features/`: API use cases, grouped by `Auth`, `Tickets`, and `Users`; operation-specific code lives beneath each feature.
- `Backend/HelpDesk.Api/src/Infrastructure/`: database, middleware, behaviors, services, options, logging, and application wiring.
- `Backend/HelpDesk.Api/src/Presentation/Controllers/`: HTTP controllers, separated into `Admin` and `User` areas.
- `Backend/HelpDesk.Api/src/Shared/`: reusable API response and shared types.
- `Backend/HelpDesk.Api/Migrations/`: Entity Framework Core migrations. Treat these as schema history; create/update migrations through EF tooling rather than hand-editing generated migration artifacts.
- `Backend/HelpDesk.Tests.Unit/`: unit tests, organized under `Features/`.
- `Backend/HelpDesk.Tests.Integration/`: API/integration tests, with `Features/`, `Configurations/`, `Fixtures/`, and `TestDoubles/`.
- These are the primary test projects for the HelpDesk API. Put isolated logic tests in `HelpDesk.Tests.Unit` and tests that exercise API behavior or require infrastructure in `HelpDesk.Tests.Integration`; do not assume tests belong in the API project or create another test project without a clear need.
- `Frontend/HelpDesk.Client/src/app/core/`: cross-cutting client concerns such as auth, HTTP, localization, and backend availability.
- `Frontend/HelpDesk.Client/src/app/features/`: route-level application features, including auth, dashboard, tickets, and users.
- `Frontend/HelpDesk.Client/src/app/shared/`: reusable interfaces, formatters, pagination, responses, and validators.
- `Frontend/HelpDesk.Client/src/app/presentation/`: presentation/theming concerns.
- `.github/workflows/`: .NET, Angular, and CodeQL automation.

Follow these existing ownership boundaries. The client uses Angular standalone route components with lazy-loaded routes; place new screens in the relevant feature area and connect them through `app.routes.ts`.

## Technology and conventions

- Backend: C# 13 / .NET 9 (`net9.0`), ASP.NET Core, EF Core with SQL Server, JWT authentication, FluentValidation, Serilog, and Swagger.
- Frontend: Angular 20, TypeScript 5.9, npm, RxJS, PrimeNG, ngx-translate, and NgRx packages.
- The Angular CLI is configured to use npm. Preserve `package-lock.json` when changing frontend dependencies.
- The tracked root `.vscode/settings.json` provides shared editor defaults and Explorer/search exclusions; respect it as workspace configuration. Language-specific formatting follows `.editorconfig` and the Angular client's Prettier configuration.
- Read the relevant neighboring feature and tests before choosing a pattern. Keep changes focused, preserve existing APIs unless the task requires a contract change, and add/update tests for behavior changes.
- No dedicated frontend lint script is defined in `package.json`; do not assume a lint command exists. Prettier configuration is present.

## Build and verification commands

Run commands from the indicated directory, or use the equivalent project/solution path from the repository root.

Backend, from `Backend/`:

```powershell
dotnet restore HelpDesk.slnx
dotnet build HelpDesk.slnx --no-restore
dotnet test HelpDesk.slnx
```

Run the API locally from the repository root with `dotnet run --project Backend/HelpDesk.Api/HelpDesk.Api.csproj`. The SDK is pinned to `9.0.318` in `global.json` (with latest-feature roll-forward).

Frontend, from `Frontend/HelpDesk.Client/`:

```powershell
npm ci
npm run build
npm test
npm start
```

`npm start` runs the Angular dev server. Its serve configuration uses HTTPS and the repository development certificate under `dev_certificate/`.

## Local services and configuration

- The API expects a SQL Server connection string (`ConnectionStrings:AppDBConnection` in development configuration). `docker-compose.yml` runs the API behind Nginx on host port 80, alongside SQL Server and Mailpit; the API listens on container port 8080 and is not directly published. SQL Server requires `MSSQL_SA_PASSWORD`, the API requires `Jwt__Key`, and the compose SQL Server data volume is external and must already exist.
- Mailpit is the local SMTP service (ports 1025 and 8025 in Compose). The Compose API uses `mailpit:1025`; a locally launched API defaults to `localhost:1025`.
- Integration tests use `ConnectionStrings:IntegrationTestConnection`; they require a reachable SQL Server database. The .NET CI workflow starts SQL Server and supplies this connection string before running the solution tests.
- Supply machine-specific values through environment variables, user secrets, or local configuration. Never copy credentials, signing keys, or other secrets into committed files. Do not expose values from appsettings files in documentation or logs.

## CI expectations

The GitHub Actions workflows are the validation source of truth:

- `.github/workflows/dotnet.yml` restores and builds `Backend/HelpDesk.slnx` in Release, starts SQL Server, then runs the solution tests.
- `.github/workflows/angular.yml` runs `npm ci` and `npm run build` from `Frontend/HelpDesk.Client/`. Frontend tests are not currently enabled in this workflow.
- `.github/workflows/codeql.yml` performs CodeQL analysis.

When changing build, test, dependency, or deployment behavior, update relevant workflow/configuration and documentation where needed. Do not claim a check passed unless it was run; distinguish local validation from CI-only checks when their prerequisites are unavailable.

## Change guidance

- For bugs, identify and fix the controlling behavior, reproduce the issue when practical, and add a focused regression test.
- For features, keep API and client contracts aligned. Check request/response models, authorization, validation, localization, and error handling as applicable.
- Treat migrations, authentication/authorization, and user/ticket data handling as security-sensitive.
- Avoid unrelated refactors and generated output (`bin/`, `obj/`, `node_modules/`, `dist/`) unless explicitly required.
- Never commit secrets. Keep changes reviewable and prefer explicit, readable code.
