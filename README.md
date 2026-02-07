# Zinguería Adaro

Proyecto base en Next.js 16 con App Router (`/app`), preparado para producción.

## Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- ESLint con `next/core-web-vitals`
- Sin librerías de UI externas

## Scripts

- `npm run dev` – Levanta el servidor de desarrollo en `http://localhost:3000`
- `npm run build` – Genera el build de producción
- `npm run start` – Arranca el servidor con el build de producción
- `npm run lint` – Ejecuta ESLint

## Estructura principal

- `src/app` – Rutas con App Router (Server Components por defecto)
- `src/features` – Módulos de dominio (ej: `home`)
- `src/components/server` – Componentes de servidor reutilizables
- `src/components/client` – Componentes de cliente (con `"use client"`)
- `src/lib` – Utilidades y lógica compartida
- `src/config` – Configuraciones de la app (`app.config.ts`)

## Primeros pasos

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar en desarrollo:
   ```bash
   npm run dev
   ```
3. Abrir `http://localhost:3000` en el navegador.
