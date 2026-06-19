import React, { useState, useEffect } from "react";

import axios from "axios";

import StockChart from "./StockChart";

function Analytics({ symbol }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/history/${symbol}`).then((res) => {
      const formatted = res.data.map((item) => ({
        time: Math.floor(new Date(item.time).getTime() / 1000),
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
      }));

      setHistory(formatted);
    });
  }, [symbol]);
  console.log(history);
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

// import React from "react";

// function Analytics({ symbol }) {
//   return (
//     <div
//       style={{
//         background: "white",
//         padding: "20px",
//         marginTop: "20px",
//       }}
//     >
//       <h2>Analytics for {symbol}</h2>
//     </div>
//   );
// }

// export default Analytics;
