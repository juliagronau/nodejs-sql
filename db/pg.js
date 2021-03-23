const { Pool } = require("pg");

const pool = new Pool({
  user: "npwhehve",
  host: "tai.db.elephantsql.com",
  database: "npwhehve",
  password: "S5U7zMtuBluaUXdYMRg2L5P8OnWRtZOS",
  port: 5432,
});

module.exports = pool;
