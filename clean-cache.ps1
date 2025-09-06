# Script PowerShell para limpiar cache y reiniciar desarrollo limpio

Write-Host "🧹 Limpiando cache de Next.js..." -ForegroundColor Yellow
if (Test-Path ".next/cache") {
    Remove-Item -Recurse -Force ".next/cache"
    Write-Host "✅ Cache de Next.js eliminada" -ForegroundColor Green
} else {
    Write-Host "⚠️ No se encontró cache de Next.js" -ForegroundColor Yellow
}

Write-Host "🧹 Limpiando node_modules cache..." -ForegroundColor Yellow
npm cache clean --force

Write-Host "🔄 Reinstalando dependencias..." -ForegroundColor Yellow
npm install

Write-Host "✅ Cache limpiada y dependencias actualizadas!" -ForegroundColor Green
Write-Host "💡 Recomendación: Limpia también la cache del navegador (Ctrl+Shift+R)" -ForegroundColor Cyan
Write-Host "🚀 Para iniciar el servidor ejecuta: npm run dev" -ForegroundColor Cyan
