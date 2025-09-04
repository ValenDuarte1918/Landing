#!/bin/bash

# Script de deployment para Hostinger
echo "🚀 Iniciando deployment para Hostinger..."

# 1. Hacer backup del config actual
echo "📦 Haciendo backup de configuración..."
cp next.config.js next.config.dev.js

# 2. Usar configuración de Hostinger
echo "⚙️ Aplicando configuración de Hostinger..."
cp next.config.hostinger.js next.config.js

# 3. Limpiar build anterior
echo "🧹 Limpiando build anterior..."
rm -rf .next out

# 4. Instalar dependencias
echo "📦 Instalando dependencias..."
npm ci --only=production

# 5. Ejecutar build para exportación estática
echo "🔨 Generando build estático..."
npm run build

# 6. Verificar que se generó la carpeta out
if [ -d "out" ]; then
    echo "✅ Build generado correctamente en carpeta 'out/'"
    echo "📁 Archivos listos para subir a Hostinger:"
    ls -la out/
    echo ""
    echo "📋 PRÓXIMOS PASOS:"
    echo "1. Comprimir carpeta 'out/' completa"
    echo "2. Subir TODO el contenido de 'out/' a public_html/ en Hostinger"
    echo "3. Configurar .htaccess si es necesario"
    echo "4. Verificar que el sitio funcione correctamente"
else
    echo "❌ Error: No se generó la carpeta 'out/'"
    echo "Revisa los errores de build arriba"
fi

# 7. Restaurar configuración original
echo "🔄 Restaurando configuración original..."
cp next.config.dev.js next.config.js
rm next.config.dev.js

echo "🎉 Proceso completado!"
