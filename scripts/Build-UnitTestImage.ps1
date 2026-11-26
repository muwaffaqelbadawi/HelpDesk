$ErrorActionPreference = 'Stop'

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dockerfilePath = Join-Path $repositoryRoot 'docker\api\dockerfile'

docker build --file "$dockerfilePath" --target tests -t helpdesk-api-unit-tests:local "$repositoryRoot"

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
