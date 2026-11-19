// src/App.jsx

import { useReducer } from "react";
import "./App.css";
import { accountReducer, initialState } from "./reducers/accountReducer";
import AccountSummary from "./components/AccountSummary";
import TransactionControls from "./components/TransactionControls";

function App() {
  // Connect our reducer rulebook and initialState to React
  const [state, dispatch] = useReducer(accountReducer, initialState);

  return (
    <div className="container">
      <h1>Digital Wallet (useReducer)</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Current Net Worth: <strong>${state.balance - state.loan}</strong>
        </p>
        <p>Total Completed Actions: {state.transactions}</p>
      </div>

      <AccountSummary state={state} />

      <TransactionControls dispatch={dispatch} />
    </div>
  );
}

export default App;