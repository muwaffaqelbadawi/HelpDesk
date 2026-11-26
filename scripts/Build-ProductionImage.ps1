$ErrorActionPreference = 'Stop'

$repositoryRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dockerfilePath = Join-Path $repositoryRoot 'docker\api\dockerfile'

docker build --file "$dockerfilePath" -t helpdesk-helpdesk-api:latest "$repositoryRoot"

if ($LASTEXITCODE -ne 0) {
  exit $LASTEXITCODE
}
