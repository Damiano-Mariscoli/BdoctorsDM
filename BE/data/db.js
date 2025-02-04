const mysql = require("mysql2");

const connection = mysql.createConnection({
  // host: process.env.DB_HOST || "localhost",
  // user: process.env.DB_USER || "root",
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_NAME,
  url: process.env.DATABASE_URL,
});

connection.connect((err) => {
  if (err) throw err;

  console.log("Connect to MYSQL");
});

module.exports = connection;
