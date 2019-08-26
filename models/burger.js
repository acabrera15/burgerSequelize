//import ORM
var orm = require("../config/orm");

//model for burger
var burgerModel = {
  //grabs all burgers
  selectAllBugers: function(toDo) {
    orm.selectAll("burgers", toDo);
  },

  //adds new burger
  insertBurger: function(burger, toDo) {
    orm.insertOne("burgers", ["burger_name"], [burger], toDo);
  },

  //updated devoured bool
  updateBurger: function(id, toDo) {
    orm.updateOne("burgers", {devoured: true}, `id = ${id}`, toDo);
  }
};

//export burger
module.exports = burgerModel;
