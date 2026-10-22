$ErrorActionPreference = 'Stop'

docker build --target tests -t helpdesk-api-unit-tests:local .

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
