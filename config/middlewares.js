module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': [
            "'self'",
            'data:',
            'cdn.jsdelivr.net',
            'strapi.io',
            'https://res.cloudinary.com/dkqlrnz6r/',
          ],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: process.env.FRONTEND_URL || ['*'], // Add your frontend domain(s)
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'X-Requested-With'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
