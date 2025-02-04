const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "dpg-cuh3lt3v2p9s73cqlu70-a",
  user: process.env.DB_USER || "db_doctor_user",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // Attendere che ci siano connessioni libere
  connectionLimit: 10, // Numero massimo di connessioni nel pool
  queueLimit: 0, // Senza limiti di coda
});

setInterval(() => {
  pool.query("SELECT 1", (pingErr) => {
    if (pingErr) {
      console.error("Errore nel ping:", pingErr);
    } else {
      console.log("Ping eseguito con successo");
    }
  });
}, 120000);

module.exports = pool.promise();
