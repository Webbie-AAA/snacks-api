const { Pool } = require("pg");

const db = new Pool({
    connectionString: DB_URL
})

console.log("DB connection established.");

module.exports = db;
