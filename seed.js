const { db, TradingCard } = require("./models");

async function seed() {
  await db.sync({ force: true });

  await TradingCard.create({
    name: "David Justice",
    team: "Atlanta Braves",
    status: "Available",
    value: 10,
    rare: false,
  });
  await TradingCard.create({
    name: "David Justice",
    category: "Cleveland Indians",
    status: "Available",
    value: 11,
    rare: false,
  });
  await TradingCard.create({
    name: "David Justice",
    team: "New York Yankees",
    status: "Unavailable",
    value: 9,
    rare: true,
  });
  await TradingCard.create({
    name: "Barry Bonds",
    team: "San Diego Padres",
    status: "Available",
    value: 15,
    rare: false,
  });
  await TradingCard.create({
    name: "Mark McGuire",
    team: "New York Yankees",
    status: "Available",
    value: 100,
    rare: true,
  });
  console.log("seeded!!!");
  await db.close();
}

seed();
