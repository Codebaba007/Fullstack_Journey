// src/components/WalletDashboard.jsx

import AccountSummary from "./AccountSummary";
import TransactionForm from "./TransactionForm";
import TransactionHistory from "./TransactionHistory";

function WalletDashboard() {
  return (
    <div className="card">
      <h2>Wallet Dashboard</h2>
      <p>This wrapper passes zero props to any child component below.</p>

      <AccountSummary />
      <TransactionForm />
      <TransactionHistory />
    </div>
  );
}

export default WalletDashboard;