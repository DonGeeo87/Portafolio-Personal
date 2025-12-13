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

# Copiar archivos de dist
Copy-Item -Path dist\* -Destination . -Recurse -Force

# Agregar y commit
git add .
git commit -m "Deploy to GitHub Pages - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push forzado
git push origin gh-pages --force

# Volver a la rama original
git checkout $currentBranch

Write-Host "Deploy completed!" -ForegroundColor Green

