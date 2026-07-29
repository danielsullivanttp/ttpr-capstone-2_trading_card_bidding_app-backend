const express = require("express");
const router = express.Router();
const { TradingCard } = require("../models/TradingCard");

// GET all TradingCards
router.get("/", async (req, res) => {
  const tradingCards = await TradingCard.findAll();
  if (!tradingCards) return res.status(404).json({ error: "Trading Cards Not Found!!!" });
  res.json(tradingCards);
});

// GET /TradingCards/:id- return a single TradingCard by id
router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const tradingcard = await TradingCard.findByPk(id);
    if (!tradingcard) return res.status(404).json({ error: "Trading Card Not Found!!!" });
    console.log("TradingCard id received: ", req.params.id);
    res.json(tradingcard);
  } catch (err) {
    console.log(err);
  }
});

// POST /TradingCards- create a new TradingCard
router.post("/", async (req, res) => {
  try {
    const tradingCard = await TradingCard.create(req.body);
    if (!tradingCard) res.status(404).json("Trading Card Not Created!!!");
    console.log(tradingCard);
    res.status(201).json(tradingCard);
  } catch (err) {
    console.log(err);
  }
});

// PATCH /TradingCards- Update Tradingcard data
router.patch("/:id", async (req, res) => {
  try {
    const tradingCard = await TradingCard.findByPk(req.params.id);
    if (!tradingCard)
      return res.status(404).json({ error: "That Trading Card Not Found!!!" });
    await tradingCard.update(req.body);
    console.log(tradingCard);
    res.status(201).json(tradingCard);
  } catch (err) {
    console.log(err);
  }
});

// DELETE /TradingCards- Delete TradingCard
router.delete("/:id", async (req, res) => {
  try {
    const tradingCard = await TradingCard.findByPk(req.params.id);
    if (!tradingCard)
      return res.status(404).json({ error: "Trading Card Not Found!!!" });
    await tradingCard.destroy();
    res.status(404);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
