import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

import api from "../api/api";

// const API = "https://zerotrade-eidw.onrender.com";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [productType, setProductType] = useState("CNC");
const navigate = useNavigate();
  const handleBuyClick = async () => {
    
    console.log("Buy button clicked");
    try {
      const res = await api.post("/orders/buy", {
        symbol: uid,
        quantity: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
        productType,
      });
      generalContext.closeBuyWindow();
      navigate("/orders");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }

  };

  console.log(stockPrice, stockQuantity, productType);
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
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
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
