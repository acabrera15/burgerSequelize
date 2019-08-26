module.exports = function(sequelize, Datatypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: Datatypes.STRING,
    devoured: { type: Datatypes.BOOLEAN, defaultValue: false }
  },{
    timestamps: false
})

  return Burgers;
};