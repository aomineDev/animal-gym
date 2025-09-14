param([string]$name)

if (-not $name) {
  write-host "Uso: .\wc.ps1 <Name>"
  exit 1
}

$lowerName = $name.ToLower()
$templatePath = "src/main/java/pe/edu/utp/animalGym/controller/web/TemplateController.java"
$outputPath = "src/main/java/pe/edu/utp/animalGym/controller/web/$name" + "Controller.java"

if (-not (Test-Path $templatePath)) {
  write-host "El archivo de plantilla no existe: $templatePath"
  exit 1
}

Copy-Item $templatePath $outputPath

(Get-Content $outputPath) `
    -replace "(?-i)Template", "$name" `
    -replace "(?-i)template", "$lowerName" `
    | Set-Content $outputPath


Write-Host "Archivo creado: controller/web/$name" + "Controller.java"