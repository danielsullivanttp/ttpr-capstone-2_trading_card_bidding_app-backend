const { DataTypes } = require("sequelize");
const db = require("../db");

const FavoriteCards = db.define("FavoriteCard", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
  cardId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = FavoriteCards;