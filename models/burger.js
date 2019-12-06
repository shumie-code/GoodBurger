// Require orm from config folder
var orm = require("../config/orm");

// The code that will call the ORM functions using burger input
var burger = {
    // Display all burgers in the database
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // Add a new burger to the db
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", ccols, vals, function(res) {
            cb(res);
        });
    },

    // Delete a burger from the db
    deleteOne: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
};

// Export at the end of the burger.js file
module.exports = burger;





















































module.exports = burger.js;