#!/bin/bash
# Script para limpiar cache y reiniciar desarrollo limpio

echo "🧹 Limpiando cache de Next.js..."
rm -rf .next/cache

echo "🧹 Limpiando node_modules cache..."
npm cache clean --force

echo "🧹 Reinstalando dependencias..."
npm install

echo "🔄 Reiniciando servidor de desarrollo..."
npm run dev

echo "✅ Cache limpiada y servidor reiniciado!"
echo "💡 Recomendación: Limpia también la cache del navegador (Ctrl+Shift+R o Cmd+Shift+R)"
