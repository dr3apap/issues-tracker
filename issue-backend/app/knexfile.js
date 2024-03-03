export default {
  development: {
    client: "sqlite3",
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: "./data/issues.db3",
    },
    migration: {
      direcotry: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },
};
