$ErrorActionPreference = 'Stop'

docker run --rm `
  --network helpdesk_default `
  --env-file .env `
  helpdesk-api-integration-tests:local

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
