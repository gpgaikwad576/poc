module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'CakeFactory'),
      user: env('DATABASE_USERNAME', 'pankaj'),
      password: env('DATABASE_PASSWORD', 'Pankaj@ubu22'),
      ssl: env.bool('DATABASE_SSL', true),
      timezone:'Asia/Kolkata'
    },
  },
});
