param([string]$name)

if (-not $name) {
  write-host "Uso: .\page.ps1 <name>"
  exit 1
}

$templatePath = "src/main/resources/templates/_template.html"
$outputPath = "src/main/resources/templates/$name.html"

if (-not (Test-Path $templatePath)) {
  write-host "El archivo de plantilla no existe: $templatePath"
  exit 1
}

Copy-Item $templatePath $outputPath

Write-Host "Archivo creado: templates/$name.html"