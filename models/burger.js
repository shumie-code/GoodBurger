// Require orm from config folder
const orm = require('../config/orm');

// The code that will call the ORM functions using burger input
const burger = {
  // Select all data in burgers_db
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // Change the devoured status to true
  updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
      });
  },

  // Delete a burger from the db
  deleteOne: function(condition, cb) {
    orm.deleteOne('burgers', condition, function(res) {
      cb(res);
    });
  }
};

// Export at the end of the burger.js file
module.exports = burger;


