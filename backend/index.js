require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const StockModel = require("./models/StocksModel");
const StockHistory = require("./models/HistoryStocksModel");

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const holdingsRoute = require("./routes/holdingsRoute");
const positionsRoute = require("./routes/positionsRoute");
const ordersRoute = require("./routes/ordersRoute");
const watchlistRoute = require("./routes/watchlistRoute");

const app = express();

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
    ],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/holdings", holdingsRoute);
app.use("/positions", positionsRoute);
app.use("/orders", ordersRoute);
app.use("/watchlist", watchlistRoute);

// Stock History API
app.get("/history/:symbol", async (req, res) => {
  try {
    const history = await StockHistory.find({
      symbol: req.params.symbol,
    }).sort({ time: 1 });

    res.json(history);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Stock Prices
function startPriceUpdater() {
  setInterval(async () => {
    const stocks = await StockModel.find();

    for (const stock of stocks) {
      const randomChange = Number((Math.random() * 10 - 5).toFixed(2));

      stock.price = Number((stock.price + randomChange).toFixed(2));
      stock.change = randomChange;

      await stock.save();
    }
  }, 1000);
}

// Save Candle History
function startHistorySaver() {
  setInterval(async () => {
    try {
      const stocks = await StockModel.find();

      for (const stock of stocks) {
        const open = stock.price;
        const close = Number((open + (Math.random() * 20 - 10)).toFixed(2));
        const high = Number(
          (Math.max(open, close) + Math.random() * 5).toFixed(2)
        );
        const low = Number(
          (Math.min(open, close) - Math.random() * 5).toFixed(2)
        );

        await StockHistory.create({
          symbol: stock.symbol,
          time: Math.floor(Date.now() / 1000),
          open,
          high,
          low,
          close,
        });
      }

      console.log("History Saved");
    } catch (err) {
      console.error(err);
    }
  }, 300000);
}

// Start Server
async function startServer() {
  try {
    await mongoose.connect(URL);

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    startPriceUpdater();
    startHistorySaver();
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}

startServer();