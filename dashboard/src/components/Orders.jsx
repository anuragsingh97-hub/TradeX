import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios, { all } from "axios";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allOrders", {
        withCredentials: true,
      })
      .then((res) => {
        setallOrders(res.data);
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  }, []);

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>

          {allOrders.map((stock, index) => {
            // const buy=stock.mode;
            // const buyClass = stock.mode ? "profit" : "loss";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
                <td className="buyClass">{stock.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Orders;
