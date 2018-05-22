'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    title: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Game.associate = function(models) {
    // associations can be defined here
  };
  return Game;
};