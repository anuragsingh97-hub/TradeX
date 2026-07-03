import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../api/api";
// const API = "https://zerotrade-eidw.onrender.com";

const Summary = () => {
  const [summary, setSummary] = useState({
    totalInvestment: 0,
    currentValue: 0,
    totalPnL: 0,
    holdingsCount: 0,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("/user/profile")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get("/user/summary")
      .then((res) => {
        setSummary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const pnlPercent =
    summary.totalInvestment > 0
      ? ((summary.totalPnL / summary.totalInvestment) * 100).toFixed(2)
      : 0;
  console.log(summary);
  return (
    <>
      <div className="username">
        <h6>Hi, {user?.username}</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{summary.currentValue.toFixed(2)}</h3>
            <p>Portfolio Value</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value
              <span>₹{summary.currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment
              <span>₹{summary.totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({summary.holdingsCount})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={summary.totalPnL >= 0 ? "profit" : "loss"}>
              ₹{summary.totalPnL.toFixed(2)}
              <small>
                {summary.totalPnL >= 0 ? "+" : ""}
                {pnlPercent}%
              </small>
            </h3>

            <p>P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value
              <span>₹{summary.currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment
              <span>₹{summary.totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
