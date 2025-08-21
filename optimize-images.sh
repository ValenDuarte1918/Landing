#!/bin/bash

# Script para optimizar imágenes existentes
# Requiere: npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg

echo "🖼️ Optimizando imágenes para mejor performance..."

# Crear carpeta optimizada
mkdir -p public/img/optimized

# Optimizar JPGs
echo "📸 Optimizando archivos JPG..."
imagemin public/img/*.jpg --out-dir=public/img/optimized --plugin=mozjpeg

# Convertir a WebP para mejor compresión
echo "🔄 Convirtiendo a formato WebP..."
imagemin public/img/*.jpg --out-dir=public/img/optimized --plugin=webp

# Optimizar WebP existentes
echo "⚡ Optimizando archivos WebP existentes..."
imagemin public/img/*.webp --out-dir=public/img/optimized --plugin=webp

echo "✅ Optimización completa!"
echo "📁 Imágenes optimizadas en: public/img/optimized/"

# Mostrar estadísticas
echo "📊 Comparando tamaños..."
du -sh public/img/
du -sh public/img/optimized/
