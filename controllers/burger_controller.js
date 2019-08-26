//import dependencies
var express = require("express");
var router = express.Router();

// //creates home route fillins view with DB burgers
// router.get("/", function(req, res) {
//   burger.selectAllBugers(function(data) {
//     var hbsObj = { burgers: data };
//     console.log(hbsObj);
//     res.render("index", hbsObj);
//   });
// });

// //create a route to add a burger
// router.post("/api/addBurger", function(req, res) {
//     burger.insertBurger(req.body.burger, function() {
//         res.redirect('/');
//     });
// });

// //creates a create to devour burger
// router.post('/api/Devour', function(req, res) {
//   burger.updateBurger(req.body.id, function() {
//     res.redirect('/');
//   })
// })

var db = require('../models');

router.get('/', function(req, res) {
  db.Burgers.findAll({}).then(function(data) {
    console.log('returnedData: ' + data);
    var hbObj = { burgers: data};
    res.render("index", hbObj)
  }).catch(function(err) {
    if (err) throw err;
  })
})

router.post("/api/addBurger", function(req, res) {
  db.Burgers.create({
    burger_name: req.body.burger
  }).then(function(data) {
    res.redirect('/');
  }).catch(function(err) {
    if (err) throw err;
  });
})

router.post('/api/Devour', function(req, res) {
  db.Burgers.update(
    {
      devoured: true
    }, 
    {
      where: {
        id: req.body.id
      }
    }
  ).then(function(data) {
    console.log(data);
    res.redirect('/');
  }).catch((err) => {
    throw err;
  })
})
module.exports = router;
