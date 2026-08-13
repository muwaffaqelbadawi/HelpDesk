FROM mcr.microsoft.com/dotnet/sdk:9.0

# Install Git and EF Core CLI
RUN apt-get update && \
    apt-get install -y --no-install-recommends git && \
    rm -rf /var/lib/apt/lists/* && \
    dotnet tool install --global dotnet-ef --version 9.0.10

ENV PATH="$PATH:/root/.dotnet/tools"

WORKDIR /workspace