module.exports = [
  'strapi::errors',
  'strapi::security', // Mantener seguridad por defecto
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://spanish-wine-camps-frontend.vercel.app',
        'https://spanish-wine-camps-frontend-web.vercel.app',
        'http://localhost:5173',
        'http://localhost:3000',
        'http://localhost:5174'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
      credentials: true,
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
