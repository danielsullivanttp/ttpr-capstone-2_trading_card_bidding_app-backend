const {DataTypes, STRING} = require("sequelize");
const db = require("../db");

const TradingCard = db.define('TradingCard', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true    
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,       
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rare: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

module.exports = TradingCard;