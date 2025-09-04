# 🔧 Guía de Variables de Entorno

Este documento explica cómo configurar las variables de entorno para el proyecto **Arenados y Blasting**.

## 📋 Variables Obligatorias para Producción

### 🔍 Analytics
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
**Cómo obtener**: Ve a [Google Analytics](https://analytics.google.com/) → Crear propiedad → Copiar el ID de medición

### 📱 Redes Sociales
```bash
NEXT_PUBLIC_WHATSAPP_URL=https://wa.link/tulink
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/tu_usuario/
```

### 🏢 Información del Negocio
```bash
NEXT_PUBLIC_BUSINESS_NAME=Arenados y Blasting
NEXT_PUBLIC_CONTACT_EMAIL=info@arenadosyblasting.com
NEXT_PUBLIC_PHONE=+54-XXX-XXX-XXXX
NEXT_PUBLIC_ADDRESS=Tu dirección completa
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## 🎛️ Feature Flags (Activar/Desactivar funcionalidades)

```bash
# Activar Google Analytics
NEXT_PUBLIC_ENABLE_ANALYTICS=true

# Activar banner de cookies
NEXT_PUBLIC_ENABLE_COOKIES_BANNER=true

# Activar popup de WhatsApp
NEXT_PUBLIC_ENABLE_WHATSAPP_POPUP=true
```

## 📁 Archivos de Configuración

### Desarrollo Local
- **Archivo**: `.env.local`
- **Propósito**: Variables para desarrollo
- **Incluir en Git**: ❌ NO

### Producción
- **Archivo**: `.env.example`
- **Propósito**: Plantilla con ejemplos
- **Incluir en Git**: ✅ SÍ

## 🚀 Pasos para Configurar

### 1. Desarrollo Local
```bash
# Copiar el archivo de ejemplo
cp .env.example .env.local

# Editar con tus valores reales
nano .env.local
```

### 2. Para Hostinger/Producción
1. Ve al panel de control de tu hosting
2. Busca "Variables de Entorno" o "Environment Variables"
3. Agrega cada variable con su valor correspondiente

### 3. Verificar Configuración
```bash
npm run build
```

## ⚠️ Importante

- **NUNCA** commitees `.env.local` al repositorio
- **SIEMPRE** usa `NEXT_PUBLIC_` para variables que el cliente necesita
- **Genera** claves secretas únicas para producción
- **Verifica** que las URLs sean válidas antes de deployment

## 🔄 Actualización de Variables

Si cambias una variable:
1. Actualiza `.env.local` para desarrollo
2. Actualiza las variables en tu hosting para producción
3. Reinicia la aplicación

## 🎯 Variables por Funcionalidad

| Funcionalidad | Variables Requeridas |
|---------------|---------------------|
| **Google Analytics** | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| **WhatsApp** | `NEXT_PUBLIC_WHATSAPP_URL` |
| **Banner Cookies** | `NEXT_PUBLIC_ENABLE_COOKIES_BANNER` |
| **Información Contacto** | `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_PHONE` |
| **SEO** | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BUSINESS_NAME` |

## 🏁 Checklist Final

- [ ] ✅ Google Analytics configurado
- [ ] ✅ WhatsApp link funcional
- [ ] ✅ Información de contacto actualizada
- [ ] ✅ URLs validadas
- [ ] ✅ Feature flags configurados
- [ ] ✅ Build exitoso
- [ ] ✅ Variables en hosting configuradas
