$ErrorActionPreference = 'Stop'

docker build -t helpdesk-helpdesk-api:latest .

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
