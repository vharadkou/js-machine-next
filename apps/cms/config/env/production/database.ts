export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      socketPath: env('INSTANCE_UNIX_SOCKET'),
      charset: 'utf8mb4',
      collation: 'utf8mb4_unicode_ci',
    },
  },
});
