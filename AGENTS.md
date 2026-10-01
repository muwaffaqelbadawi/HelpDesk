# Repository Agent Instructions

This is the repository-level starting point for coding agents working in HelpDesk. Before making substantial changes, read the root [SKILL.md](SKILL.md) for detailed project structure, conventions, development and test workflows, CI guidance, and security-sensitive practices.

## Repository Map

- `Backend/`: ASP.NET Core API and its unit and integration test projects.
- `Frontend/`: Angular client.
- `.github/`: GitHub Actions workflows and Dependabot configuration.
- Root `dockerfile` and `docker-compose.yml`: container build and local service configuration.
- Root documentation includes `README.md`, `SECURITY.md`, and `SKILL.md`; root configuration includes `.gitignore`, `.dockerignore`, `global.json`, and `dotnet-tools.json`.

## Working Flow

1. Start at the repository root and read this file, then consult [SKILL.md](SKILL.md) for the applicable project guidance.
2. Before changing a subdirectory, check for a more specific `AGENTS.md` there and inspect the relevant implementation and neighboring tests.
3. Make the smallest change that addresses the task and keep unrelated work untouched.
4. Run the relevant verification described in `SKILL.md`; report checks that could not be run and why.
