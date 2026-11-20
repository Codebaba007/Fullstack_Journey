// src/App.jsx

import { useReducer } from "react";
import "./App.css";
import { accountReducer, initialState } from "./reducers/accountReducer";
import AccountSummary from "./components/AccountSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  // Derived totals calculated directly from state.history
  const totalDeposits = state.history
    .filter((item) => item.kind === "deposit")
    .reduce((sum, item) => sum + item.amount, 0);

  const totalWithdrawals = state.history
    .filter((item) => item.kind === "withdraw")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="container">
      <h1>Digital Wallet & History</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Current Balance: <strong>${state.balance}</strong>
        </p>
        <p>Recorded Entries: {state.history.length}</p>
      </div>

      <AccountSummary
        state={state}
        totalDeposits={totalDeposits}
        totalWithdrawals={totalWithdrawals}
      />

      <TransactionForm dispatch={dispatch} />

      <TransactionHistory history={state.history} dispatch={dispatch} />
    </div>
  );
}

export default App;