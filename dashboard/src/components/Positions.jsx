import React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import api from "../api/api"
// import { positions } from "../data/data";
// const API = "https://zerotrade-eidw.onrender.com";

const Positions = () => {
  const [allPositions, setallPositions] = useState([]);

  useEffect(() => {
    api
      .get("/positions")
      .then((res) => {
        setallPositions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(allPositions);
  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Avg Price</th>
              <th>P&L</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((p) => (
              <tr key={p._id}>
                <td>{p.symbol}</td>
                <td>{p.quantity}</td>
                <td>{p.avgPrice}</td>
                <td className={p.pnl >= 0 ? "profit" : "loss"}>
                  ₹{p.pnl.toFixed(2)}
                </td>
                <td className={p.status === "OPEN" ? "profit" : "loss"}>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
