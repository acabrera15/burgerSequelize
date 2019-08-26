//import mysql
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

//starts connection to DB
connection.connect(function(err) {
  if (err) throw err;
});

//export connection
module.exports = connection;
