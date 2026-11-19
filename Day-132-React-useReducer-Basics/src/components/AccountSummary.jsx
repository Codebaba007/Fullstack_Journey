// src/components/AccountSummary.jsx

function AccountSummary({ state }) {
  const { balance, loan, transactions, message } = state;

  return (
    <div className="card">
      <h2>Account Summary</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <span className="stat-label">Balance</span>
          <span className="stat-value">${balance}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Active Loan</span>
          <span className="stat-value">${loan}</span>
        </div>

        <div className="stat-box">
          <span className="stat-label">Transactions</span>
          <span className="stat-value">{transactions}</span>
        </div>
      </div>

      <div className="status-banner">
        <strong>Status:</strong> {message}
      </div>
    </div>
  );
}

export default AccountSummary;