import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // reuse same css

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [productType, setProductType] = useState("CNC");
  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3002/orders/sell",
        {
          symbol: uid,
          quantity: Number(stockQuantity),
          price: Number(stockPrice),
          productType,
          mode: "SELL",
        },
        {
          withCredentials: true,
        },
      );

      //   console.log(res.data);
      window.location.reload();
      generalContext.closeSellWindow();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
          <select
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="CNC">CNC</option>
            <option value="MIS">MIS</option>
          </select>
        </div>
      </div>

      <div className="buttons">
        <span>Sell Order</span>

        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
