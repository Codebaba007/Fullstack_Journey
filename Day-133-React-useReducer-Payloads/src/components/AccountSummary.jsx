// src/components/AccountSummary.jsx

function AccountSummary({ state, totalDeposits, totalWithdrawals }) {
  return (
    <div className="card">
      <h2>Account Summary</h2>

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