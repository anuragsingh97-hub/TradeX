const OrdersModel=require("../models/OrdersModel");
const FundsModel=require("../models/FundsModel");
const PositionModel=require("../models/PositionsModel");
const HoldingsModel=require("../models/HoldingsModel");

module.exports.getOrders= async (req, res) => {
  // console.log("User ID:", req.userId);
  const orders = await OrdersModel.find({
    userId: req.userId,
  });
  console.log(orders);
  res.json(orders);
};

module.exports.buyStock=async (req, res) => {
  console.log("buy routes hiit");
  console.log("Buy API called");
console.log(req.body);
  try {
    const { symbol, quantity, price, productType } = req.body;
    const userId = req.userId;

    const fund = await FundsModel.findOne({ userId });

    if (!fund) {
      return res.status(404).json({
        success: false,
        message: "Fund account not found",
      });
    }

    const requiredAmount = quantity * price;

    // CHECK MONEY FIRST
    if (fund.availableCash < requiredAmount) {
      return res.status(400).json({
        success: false,
        message: "Insufficient funds",
      });
    }

    // DEDUCT MONEY
    fund.availableCash -= requiredAmount;
    await fund.save();

    // SAVE ORDER
    await OrdersModel.create({
      userId,
      symbol,
      quantity,
      price,
      mode: "BUY",
      productType,
    });

    // UPDATE POSITION
    let position = await PositionModel.findOne({
      userId,
      symbol,
      productType,
    });

    if (position) {
      const totalCost =
        position.avgPrice * position.quantity + price * quantity;

      const totalQty = position.quantity + quantity;

      position.avgPrice = totalCost / totalQty;

      position.quantity = totalQty;

      await position.save();
    } else {
      await PositionModel.create({
        userId,
        symbol,
        quantity,
        avgPrice: price,
        currentPrice: price,
        pnl: 0,
        productType,
        status: "OPEN",
      });
    }

    // CNC => UPDATE HOLDING
    if (productType === "CNC") {
      let holding = await HoldingsModel.findOne({
        userId,
        symbol,
      });

      if (holding) {
        const totalCost =
          holding.avgPrice * holding.quantity + price * quantity;

        const totalQty = holding.quantity + quantity;

        holding.avgPrice = totalCost / totalQty;

        holding.quantity = totalQty;

        await holding.save();
      } else {
        await HoldingsModel.create({
          userId,
          symbol,
          quantity,
          avgPrice: price,
          currentPrice: price,
        });
      }
    }

    res.json({
      success: true,
      message: "Order Executed Successfully",
      remainingBalance: fund.availableCash,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports.sellStock=async (req, res) => {
  console.log("sell routes hiit user id:",req.userId)
  try {
    const { symbol, quantity, price, productType } = req.body;
    const userId = req.userId;
    // console.log(symbol, quantity, price, productType);
    // CNC Validation
    if (productType === "CNC") {
      const holding = await HoldingsModel.findOne({
        userId,
        symbol,
      });

      if (!holding) {
        return res.status(400).json({
          message: "No Holdings Found",
        });
      }

      if (holding.quantity < quantity) {
        return res.status(400).json({
          message: "Not enough quantity to sell",
        });
      }

      holding.quantity -= quantity;

      if (holding.quantity === 0) {
        await HoldingsModel.deleteOne({
          _id: holding._id,
        });
      } else {
        await holding.save();
      }
    }
    console.log("SELL REQUEST:", {
      userId,
      symbol,
      productType,
    });
    // Position Update
    const position = await PositionModel.findOne({
      userId,
      symbol,
      productType,
    });
    console.log("position", position);
    if (!position) {
      return res.status(400).json({
        message: "Position not found",
      });
    }

    if (position.quantity < quantity) {
      return res.status(400).json({
        message: "Not enough position quantity",
      });
    }

    position.quantity -= quantity;

    if (position.quantity === 0) {
      position.status = "CLOSED";
    }

    await position.save();

    // Credit Funds
    const fund = await FundsModel.findOne({
      userId,
    });

    const sellValue = quantity * price;

    fund.availableCash += sellValue;

    await fund.save();

    // Save Order LAST
    await OrdersModel.create({
      userId,
      symbol,
      quantity,
      price,
      mode: "SELL",
      productType,
    });

    res.json({
      success: true,
      message: "Sell Successful",
      balance: fund.availableCash,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};