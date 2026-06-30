import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddFund from "./AddFund";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [action, setAction] = useState("ADD");

  const fetchFunds = async () => {
    try {
       console.log("fetchFunds called");
      const res = await axios.get("http://localhost:3002/user/funds", {
        withCredentials: true,
      });
      setFunds(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("Funds useEffect");
    fetchFunds();
  }, []);
  console.log(funds);

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>

        <button
          className="btn"
          onClick={() => {
            setAction("ADD");
            setShowModal(true);
          }}
        >
          Add Funds
        </button>

        <button
          className="btn"
          onClick={() => {
            setAction("WITHDRAW");
            setShowModal(true);
          }}
        >
          Withdraw
        </button>
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{funds?.availableCash.toFixed(2)}</h3>

            <p>Margin available</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Margins used
              <span>₹{funds?.usedMargin.toFixed(2)}</span>
            </p>

            <p>
              Opening balance
              <span>₹{funds?.openingBalance.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>
      {showModal && (
        <AddFund
          action={action}
          fetchFunds={fetchFunds}
          close={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Funds;
