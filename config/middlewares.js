module.exports = [
  'strapi::errors',
  'strapi::security', // Mantener seguridad por defecto
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: [
        'https://spanish-wine-camps-frontend.vercel.app', 
        'http://localhost:5173', 
        'http://localhost:3000'
      ]
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
