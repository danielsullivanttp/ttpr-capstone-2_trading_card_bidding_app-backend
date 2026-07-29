const express = require("express");
const app = express();
const PORT = 3000;
const { db } = require("./models");
const TradingCardsRouter = require("./routes/trading-cards");
app.use(express.json());

app.get("/", (req, res) => {
  res.redirect("/Tradingcard");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/TradingCard", TradingCardsRouter); // (Mounting router from "./routes/trading-cards") adds the /TradingCard prefix
// ****Isn't repeated in routes/trading-cards.js***

async function startApp() {
  await db.sync();
  app.listen(PORT, () => {
    console.log("Server running on port 3000!!!");
  });
}

startApp();
