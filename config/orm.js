// Import connection.js module
var connection = require("../config/connection.js");

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  // Loop through the keys and push the key value as a string into an array
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

var orm = {
  // Display all burgers in the database
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Add a burger to the database
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    conneection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err
      }
      cb(result);
    });
   }
};
// Export the orm object for the model burger,js
module.exports = orm;