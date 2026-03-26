module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://spanish-wine-camps-strapi.onrender.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://spanish-wine-camps-strapi.onrender.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
      cors: {
        enabled: true,
        origin: ['https://spanish-wine-camps-frontend.vercel.app', 'http://localhost:5173'],
      },
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
