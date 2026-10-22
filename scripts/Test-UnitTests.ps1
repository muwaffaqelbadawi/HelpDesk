$ErrorActionPreference = 'Stop'

docker run --rm helpdesk-api-unit-tests:local

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
