// src/components/AccountSummary.jsx

import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function AccountSummary() {
  const { state } = useContext(WalletContext);

  const totalDeposits = state.history
    .filter((item) => item.kind === "deposit")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalWithdrawals = state.history
    .filter((item) => item.kind === "withdraw")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="card">
      <h3>Account Summary</h3>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Balance</span>
          <span className="stat-value">${state.balance}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Total Deposits</span>
          <span className="stat-value">${totalDeposits}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Total Spent</span>
          <span className="stat-value">${totalWithdrawals}</span>
        </div>
      </div>

      <div className="status-banner">
        <strong>Status:</strong> {state.message}
      </div>
    </div>
  );
}

export default AccountSummary;