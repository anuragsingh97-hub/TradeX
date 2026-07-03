import { useState } from "react";
import axios from "axios";
import "./AddFund.css";
import api from "../api/api";

const AddFund = ({ action, close, fetchFunds }) => {
  const [amount, setAmount] = useState("");
  const handleSubmit = async () => {
    try {
      if (action === "ADD") {
        // console.log("add fund");
        await api.post(
          "/user/addfunds",
          {
            amount: Number(amount),
          },
          
        );
      } else {
        await api.post(
          "/user/withdrawfunds",
          {
            amount: Number(amount),
          },
        );
      }

      fetchFunds();
      close();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
  <div className="fund-modal-overlay">
    <div className="fund-modal">
      <h2>{action === "ADD" ? "Add Funds" : "Withdraw Funds"}</h2>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="fund-modal-buttons">
        <button className="fund-submit btn" onClick={handleSubmit}>
          Confirm
        </button>

        <button className="fund-cancel" onClick={close}>
          Cancel
        </button>
      </div>
    </div>
  </div>
);

};

export default AddFund;