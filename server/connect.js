const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Test12345!",
  database: "social",
  waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
});

// const db = mysql.createPool({
//   connectionLimit: 5,
//   host: "localhost",
//   user: "root",
//   password: "Test12345!",
//   database: "social",
//   // insecureAuth: true,
// });

// const db = mysql.createPool({
//   host: "localhost",
//   port: 3308,
//   user: "root",
//   password: "Test12345!",
//   database: "social",
// });

// const db = mysql.createConnection({
//   host: "localhost",
//   // port: 3306,
//   user: "root",
//   password: "Test12345!",
//   database: "social",
//   // insecureAuth: true,
// });

// db.connect((err) => {
//   if (err) {
//     console.log("Not connected to database");
//     throw err;
//   } else {
//     console.log("Connected to database");
//   }
// });

module.exports = db;
