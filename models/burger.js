module.exports = function(sequelize, Datatypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: Datatypes.STRING,
    devoured: Datatypes.BOOLEAN
  })

  return Burger;
};