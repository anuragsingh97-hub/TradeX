import React, { useState, useEffect, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";
import Analytics from "./Analytics";
import { Tooltip, Grow } from "@mui/material";
// import TopBar from "./TopBar";
import "../index.css";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

// const API = "https://zerotrade-eidw.onrender.com";
import api from "../api/api"

const WatchList = () => {
  const [allStocks, setallStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
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
const filteredStocks = allStocks.filter((stock) =>
      stock.symbol.toLowerCase().includes(search.toLowerCase()),
    );
  const data = {
    datasets: [
      {
        label: "Price",
        data: allStocks.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input style={{color:"black"}}
          type="text"
          name="search"
          id="search"
          placeholder="Search eg : Sensex, Nifty, Wipro"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="counts">
          {filteredStocks.length} / {allStocks.length}
        </span>
      </div>

      <ul className="list">
        {filteredStocks.map((stock, index) => {
          return (
            <WatchListItem
              stock={stock}
              key={index}
              setSelectedStock={setSelectedStock}
              setShowAnalytics={setShowAnalytics}
            />
          );
        })}
      </ul>
      {showAnalytics && (
        <div className="analytics-overlay">
          <div className="analytics-header">
            <h3>{selectedStock} Analysis</h3>

            <button
              className="close-btn"
              onClick={() => setShowAnalytics(false)}
            >
              ✕
            </button>
          </div>

          <Analytics symbol={selectedStock} />
        </div>
      )}
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, setSelectedStock, setShowAnalytics }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.change < 0 ? "down" : "up"}>{stock.symbol}</p>
        <div className="itemInfo">
          <span className="percent">
            {stock.change > 0 ? "+" : ""}
            {stock.change}%
          </span>
          {stock.change < 0 ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && (
        <WatchListActions
          uid={stock.symbol}
          setSelectedStock={setSelectedStock}
          setShowAnalytics={setShowAnalytics}
        />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, setSelectedStock, setShowAnalytics }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button
            className="action"
            onClick={() => {
              setSelectedStock(uid);
              setShowAnalytics(true);
            }}
          >
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        {/* <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip> */}
      </span>
    </span>
  );
};
