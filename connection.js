// connect to mysql here 
const mysql = require("mysql2");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Mamecago1941!',
  database: 'employee' 
});
console.log('✨ You are now connected!✨');
connection.connect(function (err) {
  if (err) {
    throw err;
  }
});
module.exports = connection;