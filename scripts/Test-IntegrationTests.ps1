$ErrorActionPreference = 'Stop'

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$envFilePath = Join-Path $repositoryRoot '.env'

docker run --rm `
  --network helpdesk_default `
  --env-file "$envFilePath" `
  helpdesk-api-integration-tests:local

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
