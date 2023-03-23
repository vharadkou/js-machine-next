export default ({ env }) => ({
  host: env('INNER_HOST'),
  port: env('INNER_PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
