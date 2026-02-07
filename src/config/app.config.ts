export const appConfig = {
  name: 'Zinguería Adaro',
  locale: 'es-AR',
  baseUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
} as const;
