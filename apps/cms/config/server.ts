export default ({ env }) => ({
  host: env('HOST'),
  port: env('PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
