$ErrorActionPreference = 'Stop'

docker build --target integration-tests -t helpdesk-api-integration-tests:local .

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
