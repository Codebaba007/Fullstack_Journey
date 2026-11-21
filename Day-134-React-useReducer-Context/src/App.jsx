// src/App.jsx

import { useReducer } from "react";
import "./App.css";
import { accountReducer, initialState } from "./reducers/accountReducer";
import { WalletContext } from "./context/WalletContext";
import WalletDashboard from "./components/WalletDashboard";

function App() {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  return (
    <div className="container">
      <h1>Global Wallet (useReducer + useContext)</h1>

      <div className="card">
        <h2>App Level Status</h2>
        <p>
          Current Balance: <strong>${state.balance}</strong>
        </p>
        <p>Total Recorded Transactions: {state.history.length}</p>
      </div>

      <WalletContext.Provider value={{ state, dispatch }}>
        <WalletDashboard />
      </WalletContext.Provider>
    </div>
  );
}

export default App;