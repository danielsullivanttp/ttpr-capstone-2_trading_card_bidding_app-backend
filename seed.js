const {db, TradingCard} = require("./models/TradingCard");

async function seed() {
  await db.sync({ force: true });

  await TradingCard.create({

      name: "David Justice",
      team: "Atlanta Braves",
      status: "Availible",
      value: 10,
      rare: false,
    });
  await TradingCard.create({
      name: "David Justice",
      category: "Cleveland Indians",
      status: "Availible",
      value: 11,
      rare: false,
    });
  await TradingCard.create({
      name: "David Justice",
      team: "New York Yankees",
      status: "Unavailible",
      value: 9,
      rare: true,
    });
   await TradingCard.create({
      name: "Barry Bonds",
      team: "San Diego Padres",
      status: "Availible",
      value: 15,
      rare: false,
    });
   await TradingCard.create({
        
      name: "Mark McGuire",
      team: "New York Yankees",
      status: "Availible",
      value: 100,
      rare: true,
   });
  console.log("seeded!!!");
  await db.close();
}

seed();