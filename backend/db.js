const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "mysql.railway.internal",
  user: "root",
  password: "LujrelrrBbSoDJxLGUpSrcpMlsFcorZH",
  database: "railway",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
  } else {
    console.log('Successfully connected to Railway Database!');
  }
});

module.exports = db;
