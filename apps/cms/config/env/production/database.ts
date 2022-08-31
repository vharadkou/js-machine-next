export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST'),
      port: env('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', true),
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci',
    },
  },
});
