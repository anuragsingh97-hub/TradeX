import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios, { all } from "axios";

const Orders = () => {
  const [allOrders, setallOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/orders", {
        withCredentials: true,
      })
      .then((res) => {
        setallOrders(res.data);
      })
      .catch((err) => {
        console.log(err.response?.data);
      });
  }, []);

 console.log(allOrders);
  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((stock) => (
              <tr key={stock._id}>
                <td>{stock.symbol}</td>
                <td>{stock.quantity}</td>
                <td>{stock.price}</td>
                <td
                  className={
                    stock.mode?.toLowerCase() === "buy" ? "profit" : "loss"
                  }
                >
                  {stock.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
