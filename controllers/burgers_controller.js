// Require Dependencies
var express = require("express");
// Initialize express routes 
var router = express.Router();
// Import the model (burger.js) to use its database functions
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// Add new burger to db
router.post("/api/burgers", function(req, res) {
    burger.insertOne([ "burger_name", "devoured"], [ req.body.name, req.body.devoured], function(result) {
            // Send back the ID  of the new burger
            res.json({ id: result.insertId });
    });
});

// Set burger devoured status to true
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = "  + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed then the ID Must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Delete burger from db
router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed then id must not exist so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
