// Import require Connection.js file
const connection = require('../config/connection');
// Helper function for sql syntax
function printQuestionMarks(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  const arr = [];

  // loop through the keys and push the key/value as a string into array
  for (const key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces add quotations
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions
const orm = {
  selectAll: function(tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Create new burger
  insertOne: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table}`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Update burger
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // Delete a burger from the database
  deleteOne: function(table, condition, cb) {
      const queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);

      connection.query(queryString, function(err, result) {
          if (err) {
              throw err
          }
          cb(result);
      });
  }
};
module.exports = orm;
