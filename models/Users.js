const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: { 
        isEmail: true
    },
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  defaultScope: {
    attributes: { exclude: ["passwordHash"] }
  },
});

module.exports = User;
