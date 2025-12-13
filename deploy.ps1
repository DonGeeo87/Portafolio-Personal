# Script de deploy manual para GitHub Pages (Windows)
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Deploying to GitHub Pages..." -ForegroundColor Cyan

# Guardar la rama actual
$currentBranch = git branch --show-current

# Crear o cambiar a rama gh-pages
git checkout --orphan gh-pages 2>$null
git rm -rf . 2>$null

# Copiar solo archivos de dist (excluir node_modules si existe)
Get-ChildItem -Path dist -Recurse | ForEach-Object {
    $destPath = $_.FullName.Replace((Resolve-Path dist).Path, (Get-Location).Path)
    $destDir = Split-Path -Parent $destPath
    if (-not (Test-Path $destDir)) {
        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
    }
    Copy-Item -Path $_.FullName -Destination $destPath -Force
}

# Agregar y commit
git add .
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push forzado
git push origin gh-pages --force

# Volver a la rama original
git checkout $currentBranch

Write-Host "Deploy completed!" -ForegroundColor Green

