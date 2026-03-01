const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ciphersqlstudio",
  password: process.env.PG_PASSWORD,
  port: 5432,
});

module.exports = pool;
