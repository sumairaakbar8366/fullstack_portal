const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: 'root', 
  password: process.env.MYSQL_ROOT_PASSWORD, 
  database: process.env.MYSQL_DATABASE, 
  port: 3306 
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err.message);
    return;
  }
  console.log('Connected to MySQL Database!');
});

module.exports = db;
