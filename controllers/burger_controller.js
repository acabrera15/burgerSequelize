//import dependencies
var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

//creates home route fillins view with DB burgers
router.get("/", function(req, res) {
  burger.selectAllBugers(function(data) {
    var hbsObj = { burgers: data };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

//create a route to add a burger
router.post("/api/addBurger", function(req, res) {
    burger.insertBurger(req.body.burger, function() {
        res.redirect('/');
    });
});

//creates a create to devour burger
router.post('/api/Devour', function(req, res) {
  burger.updateBurger(req.body.id, function() {
    res.redirect('/');
  })
})

module.exports = router;
