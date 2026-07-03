import React, { useState, useEffect, useContext } from "react";

import axios from "axios";


import Menu from "./Menu";
import api from "../api/api"


const TopBar = () => {
  const [allStocks, setallStocks] = useState([]);
  useEffect(() => {
    const fetchStocks = () => {
      api
        .get("/watchlist")
        .then((res) => {
          setallStocks(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchStocks();

    const interval = setInterval(fetchStocks, 2000);

    return () => clearInterval(interval);
  }, []);
const nifty = allStocks?.find(
  (stock) => stock?.symbol === "NIFTY50"
);

const sensex = allStocks?.find(
  (stock) => stock?.symbol === "SENSEX"
);


  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY50</p>
          <p className="index-points">{nifty?.price}</p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{sensex?.price}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;