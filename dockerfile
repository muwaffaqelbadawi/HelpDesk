# Restore and build the API and both test projects from the repository root.
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

COPY global.json ./
COPY Backend/HelpDesk.slnx ./Backend/
COPY Backend/HelpDesk.Api/HelpDesk.Api.csproj ./Backend/HelpDesk.Api/
COPY Backend/HelpDesk.Tests.Unit/HelpDesk.Tests.Unit.csproj ./Backend/HelpDesk.Tests.Unit/
COPY Backend/HelpDesk.Tests.Integration/HelpDesk.Tests.Integration.csproj ./Backend/HelpDesk.Tests.Integration/

RUN dotnet restore Backend/HelpDesk.slnx

COPY Backend/ ./Backend/

RUN dotnet build Backend/HelpDesk.slnx \
    --configuration Release \
    --no-restore

# Unit tests run during the deployment image build and gate publishing.
FROM build AS unit-tests

RUN dotnet test Backend/HelpDesk.Tests.Unit/HelpDesk.Tests.Unit.csproj \
    --configuration Release \
    --no-build \
    --no-restore

# Run this target as a container with ConnectionStrings__IntegrationTestConnection
# set and SQL Server reachable. It executes both API test projects.
FROM build AS tests

ENTRYPOINT ["dotnet", "test", "Backend/HelpDesk.slnx", "--configuration", "Release", "--no-build", "--no-restore"]

# Keep the runtime image free of the SDK and test artifacts.
FROM unit-tests AS publish

RUN dotnet publish Backend/HelpDesk.Api/HelpDesk.Api.csproj \
    --configuration Release \
    --output /app/publish \
    --no-build \
    --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final

WORKDIR /app

ENV ASPNETCORE_HTTP_PORTS=8080

EXPOSE 8080

COPY --from=publish /app/publish/ ./

RUN mkdir -p /app/Logs \
    && chown "$APP_UID:$APP_UID" /app/Logs

USER $APP_UID

ENTRYPOINT ["dotnet", "HelpDesk.Api.dll"]
