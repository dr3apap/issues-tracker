export default {
  development: {
    client: "sqlite3",
    useNullAsDefault: true, // needed for sqlite
    connection: {
      filename: "./data/issues.db3",
      filename: "./data/users.db3",
    },
    migration: {
      direcotry: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
