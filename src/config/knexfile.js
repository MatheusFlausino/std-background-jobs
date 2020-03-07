module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, cb) =>
        conn.run('PRAGMA foreign_keys = ON', cb)
    },
    migrations: {
      directory: './db/migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      debug: process.env.PG_DEBUG
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    }
  }
}
