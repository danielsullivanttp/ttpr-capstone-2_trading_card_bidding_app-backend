const db = require("../db");
const FavoriteCards = require("./FavoriteCards");
const TradingCard = require("./TradingCard");
const Users = require("./Users");

Users.hasMany(TradingCard, { foreignKey: "ownerId" });
TradingCard.belongsTo(Users, { foreignKey: "ownerId" });

// Users.belongsToMany(TradingCard, {
//   through: FavoriteCards,
//   foreignKey: "userId",
//   otherKey: "cardId"
// });

// TradingCard.belongsToMany(Users, {
//   through: FavoriteCards,
//   foreignKey: "cardId",
//   otherKey: "userId"
// });

// // Optional direct join-table associations
// Users.hasMany(FavoriteCards, { foreignKey: "userId" });
// FavoriteCards.belongsTo(Users, { foreignKey: "userId" });

TradingCard.hasMany(FavoriteCards, { foreignKey: "cardId" });
FavoriteCards.belongsTo(TradingCard, { foreignKey: "cardId" });

module.exports = { db, FavoriteCards, TradingCard, Users };