# Script de deployment para Hostinger (PowerShell)
Write-Host "🚀 Iniciando deployment para Hostinger..." -ForegroundColor Green

# 1. Hacer backup del config actual
Write-Host "📦 Haciendo backup de configuración..." -ForegroundColor Yellow
Copy-Item "next.config.js" "next.config.dev.js"

# 2. Usar configuración de Hostinger
Write-Host "⚙️ Aplicando configuración de Hostinger..." -ForegroundColor Yellow
Copy-Item "next.config.hostinger.js" "next.config.js"

# 3. Limpiar build anterior
Write-Host "🧹 Limpiando build anterior..." -ForegroundColor Yellow
if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
if (Test-Path "out") { Remove-Item -Recurse -Force "out" }

# 4. Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
npm ci --only=production

# 5. Ejecutar build para exportación estática
Write-Host "🔨 Generando build estático..." -ForegroundColor Yellow
npm run build

# 6. Verificar que se generó la carpeta out
if (Test-Path "out") {
    Write-Host "✅ Build generado correctamente en carpeta 'out/'" -ForegroundColor Green
    Write-Host "📁 Archivos listos para subir a Hostinger:" -ForegroundColor Cyan
    Get-ChildItem "out\" | Format-Table Name, Length, LastWriteTime
    Write-Host ""
    Write-Host "📋 PRÓXIMOS PASOS:" -ForegroundColor Magenta
    Write-Host "1. Comprimir carpeta 'out/' completa"
    Write-Host "2. Subir TODO el contenido de 'out/' a public_html/ en Hostinger"
    Write-Host "3. Configurar .htaccess si es necesario"
    Write-Host "4. Verificar que el sitio funcione correctamente"
} else {
    Write-Host "❌ Error: No se generó la carpeta 'out/'" -ForegroundColor Red
    Write-Host "Revisa los errores de build arriba"
}

# 7. Restaurar configuración original
Write-Host "🔄 Restaurando configuración original..." -ForegroundColor Yellow
Copy-Item "next.config.dev.js" "next.config.js"
Remove-Item "next.config.dev.js"

Write-Host "🎉 Proceso completado!" -ForegroundColor Green
