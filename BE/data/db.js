const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "dpg-cuh3lt3v2p9s73cqlu70-a",
  user: process.env.DB_USER || "db_doctor_user",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  if (err) throw err;

  console.log("Connected to MYSQL");

  // Implementazione del ping periodico ogni 10 minuti
  setInterval(() => {
    connection.query("SELECT 1", (pingErr) => {
      if (pingErr) {
        console.error("Errore nel ping:", pingErr);
      } else {
        console.log("Ping eseguito con successo");
      }
    });
  }, 120000); // 600000 ms = 10 minuti
});

module.exports = connection;
