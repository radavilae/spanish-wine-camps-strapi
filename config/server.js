module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // <-- Asegúrate que sea 0.0.0.0
  port: env.int('PORT', 10000), // <-- Forzamos el 10000 que pide Render
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
