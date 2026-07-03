import React, { useState, useEffect } from "react";

import axios from "axios";

import StockChart from "./StockChart";

import api from "../api/api"



function Analytics({ symbol }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    api.get(`/history/${symbol}`).then((res) => {
      const formatted = res.data.map((item,index) => ({
        time: Math.floor(Date.now() / 1000) + index * 86400,
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      }));

      setHistory(formatted);
      // console.table(formatted);
    });
  }, [symbol]);
  // console.log(history);
  //   console.table(
  //   history.map(item => ({
  //     time: item.time,
  //     open: item.open,
  //     close: item.close
  //   }))
  // );
  return <StockChart data={history} />;
}

export default Analytics;

