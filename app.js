const express = require("express");
const app = express();
const PORT = 3000;
const {db}  = require("./models/TradingCard");

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({status: "ok"});
});

async function startApp(){
    await db.sync();
    app.listen(PORT, () => {console.log("Server running on port 3000!!!")});
db.close()
}

startApp();