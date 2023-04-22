module.exports = {
  development: {
    seeds: {
      directory: './seeds'
    },
    client: "mysql2",
    connection: "mysql2://root:P@ssword123@127.0.0.1:3306/entrance_test",
    migrations: {
      // eslint-disable-next-line no-undef
      directory: __dirname + "/migrations",
    },
  },
  production: {
    client: "mysql2",
    connection: "mysql2://root:P@ssword123@127.0.0.1:3306/entrance_test",
  },
};