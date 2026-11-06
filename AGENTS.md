# Repository Agent Instructions

This is the repository-level starting point for coding agents working in HelpDesk. Before making substantial changes, read the root [SKILL.md](SKILL.md) for detailed project structure, conventions, development and test workflows, CI guidance, and security-sensitive practices.

## Repository Map

- `Backend/`: ASP.NET Core API and its unit and integration test projects.
- `Frontend/`: Angular client.
- `.github/`: GitHub Actions workflows and Dependabot configuration.
- `docker/`: API and frontend Dockerfiles plus Nginx configuration; root `docker-compose.yml` orchestrates the local services.
- Root documentation includes `README.md`, `SECURITY.md`, and `SKILL.md`; root configuration includes `.gitignore`, `.dockerignore`, `global.json`, and `dotnet-tools.json`.

## Working Flow

1. Start at the repository root and read this file, then consult [SKILL.md](SKILL.md) for the applicable project guidance.
2. Before changing a subdirectory, check for a more specific `AGENTS.md` there and inspect the relevant implementation and neighboring tests.
3. Make the smallest change that addresses the task and keep unrelated work untouched.
4. Run the relevant verification described in `SKILL.md`; report checks that could not be run and why.

For API integration tests, inspect and reuse the established `Fixtures/` and `TestData/` patterns before adding helpers or test infrastructure. The canonical guidance, including the current factory and test-data responsibilities, is in the integration-testing section of [SKILL.md](SKILL.md).

## Anonymous endpoint convention

Endpoints marked `[AllowAnonymous]` and every component in their execution paths must remain independent of `UserContext`, including direct and indirect access to every property, such as `UserId`, `GuidUserId`, `SessionId`, `JwtId`, `JwtExpiresAt`, `UserName`, `IsAuthenticated`, `HasClaims`, and any other current-authenticated user property. Inspect the complete path when implementing or investigating these endpoints; when diagnosing an unexpected 401, check for `UserContext` access first. See [Anonymous endpoints and UserContext](SKILL.md#anonymous-endpoints-and-usercontext) for the detailed rule and review guidance.
