const {Sequelize} = require('sequelize');

const db = new Sequelize('postgres://postgres:root@localhost:5432/TradingCard_app',{logging: false})
