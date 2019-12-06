//Connect to MYSQL
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jordan9152!",
    database: "burgers_db"
});

// MAKE CONNECTION
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// EXPORT CONNECTION
module.exports = connection; 