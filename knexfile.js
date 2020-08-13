// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullableAsDefault: true,
    pool: {
      //whenever setting up a foreign key in SCHEMA you need this POOL in knex file. If this is missing then foreign keys will be added without matching to the primary key. This prevents that from happening
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
};
