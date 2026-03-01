const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: process.env.PG_PASSWORD,
  database: "ciphersqlstudio",
  port: 5432,
});

module.exports = pool;
