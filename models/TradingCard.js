const { DataTypes } = require("sequelize");
const db = require("../db");

const TradingCard = db.define("TradingCard", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("Available", "Unavailable"),
    allowNull: false,
  },
  value: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  rare: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = TradingCard;
