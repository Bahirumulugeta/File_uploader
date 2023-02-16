// Config file
const config = require("../configs");
// Mysql
const mysql = require("mysql");
// Create connection
const db = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});
// Connect
db.connect((err) => {
  if (err) {
    throw new Error(err);
  }
  // Executed whenever it connected successfully
  console.log("MySql Connected...");
});
// Export
module.exports = db;
