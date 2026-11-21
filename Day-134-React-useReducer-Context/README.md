# Day 134 - React `useReducer` + `useContext` (Global State Without Prop Drilling)

## Overview

This project combines **`useReducer`** and **`useContext`** to build a scalable global state management architecture without external libraries. By running `useReducer(accountReducer, initialState)` in `App.jsx` and broadcasting `{ state, dispatch }` through `WalletContext.Provider`, any nested component can read wallet data or dispatch state actions directly without passing props through intermediate wrappers (`WalletDashboard.jsx`).

The application allows users to:

- Manage interconnected wallet state (`balance`, `history`, `message`) through a pure reducer (`accountReducer.js`).
- Broadcast `{ state, dispatch }` globally via `WalletContext.Provider`.
- Nest intermediate structural components (`WalletDashboard.jsx`) with zero prop drilling.
- Subscribe selectively to `{ state }` (`AccountSummary`), `{ dispatch }` (`TransactionForm`), or `{ state, dispatch }` (`TransactionHistory`).

## Concepts Learned

- Combining `useReducer` and `useContext` for zero-dependency global state management
- Broadcasting `{ state, dispatch }` through `Context.Provider`
- Eliminating prop drilling across multi-layer component hierarchies (`App` → `WalletDashboard` → child cards)
- Selective context destructuring based on each component's responsibility
- Separating pure reducer logic (`src/reducers/`), context definitions (`src/context/`), and UI components (`src/components/`)

## Project Structure

```text
Day-134-React-useReducer-Context/
├── src/
│   ├── components/
│   │   ├── AccountSummary.jsx
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionHistory.jsx
│   │   └── WalletDashboard.jsx
│   ├── context/
│   │   └── WalletContext.jsx
│   ├── reducers/
│   │   └── accountReducer.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Implementation

### 1. Creating the Wallet Context

File: `src/context/WalletContext.jsx`

```jsx
import { createContext } from "react";

export const WalletContext = createContext();
```

### 2. Reducer & Initial State

File: `src/reducers/accountReducer.js`

```javascript
export const initialState = {
  balance: 500,
  history: [
    {
      id: 1,
      kind: "deposit",
      amount: 500,
      note: "Initial Opening Balance",
    },
  ],
  message: "Wallet connected via Context + useReducer.",
};

export function accountReducer(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      const { kind, amount, note } = action.payload;

      if (!amount || amount <= 0) {
        return {
          ...state,
          message: "Please enter a valid amount greater than $0.",
        };
      }

      if (kind === "withdraw" && state.balance < amount) {
        return {
          ...state,
          message: `Cannot withdraw $${amount}. Available balance is $${state.balance}.`,
        };
      }

      const newBalance =
        kind === "deposit" ? state.balance + amount : state.balance - amount;

      const newTransaction = {
        id: Date.now(),
        kind,
        amount,
        note:
          note.trim() ||
          (kind === "deposit" ? "Cash Deposit" : "Cash Withdrawal"),
      };

      return {
        ...state,
        balance: newBalance,
        history: [newTransaction, ...state.history],
        message: `${
          kind === "deposit" ? "Deposited" : "Withdrew"
        } $${amount} (${newTransaction.note}).`,
      };
    }

    case "DELETE_TRANSACTION": {
      const target = state.history.find((item) => item.id === action.payload);
      if (!target) return state;

      const adjustedBalance =
        target.kind === "deposit"
          ? state.balance - target.amount
          : state.balance + target.amount;

      if (adjustedBalance < 0) {
        return {
          ...state,
          message:
            "Cannot delete this deposit because those funds were already spent.",
        };
      }

      return {
        ...state,
        balance: adjustedBalance,
        history: state.history.filter((item) => item.id !== action.payload),
        message: `Removed "${target.note}" ($${target.amount}) and adjusted balance.`,
      };
    }

    case "RESET_WALLET":
      return {
        ...initialState,
        message: "Wallet reset to initial $500 balance.",
      };

    default:
      return state;
  }
}
```

### 3. Root Component & Provider Broadcast

File: `src/App.jsx`

```jsx
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

      <WalletContext.Provider dispatch state, value="{{" }}>
        <WalletDashboard/>
      </WalletContext.Provider>
    </div>
  );
}

export default App;
```

### 4. Zero-Prop Structural Wrapper

File: `src/components/WalletDashboard.jsx`

```jsx
import AccountSummary from "./AccountSummary";
import TransactionForm from "./TransactionForm";
import TransactionHistory from "./TransactionHistory";

function WalletDashboard() {
  return (
    <div className="card">
      <h2>Wallet Dashboard</h2>
      <p>This wrapper passes zero props to any child component below.</p>

      <AccountSummary/>
      <TransactionForm/>
      <TransactionHistory/>
    </div>
  );
}

export default WalletDashboard;
```

### 5. Context Consumer Components

File: `src/components/AccountSummary.jsx`

```jsx
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
```

File: `src/components/TransactionForm.jsx`

```jsx
import { useContext, useState } from "react";
import { WalletContext } from "../context/WalletContext";

function TransactionForm() {
  const { dispatch } = useContext(WalletContext);

  const [kind, setKind] = useState("deposit");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        kind,
        amount: Number(amount),
        note,
      },
    });

    setAmount("");
    setNote("");
  }

  return (
    <div className="card">
      <h3>New Transaction</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tx-kind">Transaction Type</label>
          <select
            id="tx-kind"
            value={kind}
            onChange={(event) => setKind(event.target.value)}
          >
            <option value="deposit">Deposit (+)</option>
            <option value="withdraw">Withdraw (-)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tx-amount">Amount ($)</label>
          <input
            id="tx-amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="e.g. 120"
          />
        </div>

        <div className="form-group">
          <label htmlFor="tx-note">Description Note</label>
          <input
            id="tx-note"
            type="text"
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="e.g. Freelance Payment or Groceries"
          />
        </div>

        <div className="button-group">
          <button type="submit">Record Transaction</button>
          <button
            type="button"
            className="danger"
            onClick={() => dispatch({ type: "RESET_WALLET" })}
          >
            Reset Wallet
          </button>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
```

File: `src/components/TransactionHistory.jsx`

```jsx
import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function TransactionHistory() {
  const { state, dispatch } = useContext(WalletContext);
  const { history } = state;

  return (
    <div className="card">
      <h3>Transaction History ({history.length})</h3>

      {history.length === 0 ? (
        <p>No transactions recorded yet.</p>
      ) : (
        <ul className="history-list">
          {history.map((item) => (
            <li key={item.id} className={`history-item ${item.kind}`}> <div className="history-info"> <span className="history-note">{item.note}</span> <span className={`history-amount ${item.kind}`}>
                  {item.kind === "deposit" ? "+" : "-"}${item.amount}
                </span>
              </div>

              <button
                className="danger small"
                onClick={() =>
                  dispatch({ type: "DELETE_TRANSACTION", payload: item.id })
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionHistory;
```

## How It Works

1. `App.jsx` initializes `useReducer(accountReducer, initialState)` and renders the top-level **App Level Status** card.
2. `WalletContext.Provider` wraps `<WalletDashboard />` and passes `value={{ state, dispatch }}` down the component tree.
3. `WalletDashboard.jsx` organizes the layout without accepting or forwarding any props.
4. `AccountSummary.jsx` consumes `{ state }` from `WalletContext` to compute and display deposit/withdrawal statistics and the status banner.
5. `TransactionForm.jsx` manages local form inputs with `useState` and consumes `{ dispatch }` from `WalletContext` to submit new transactions or reset the wallet.
6. `TransactionHistory.jsx` consumes `{ state, dispatch }` to render all transaction rows and dispatch deletion actions by `id`.

## Key Takeaways

- Combining `useReducer` with `useContext` gives any deeply nested component direct access to centralized state transitions without prop drilling.
- Each consumer component destructures only what it needs from `useContext(WalletContext)` (`{ state }`, `{ dispatch }`, or both).
- Separating `src/context/`, `src/reducers/`, and `src/components/` creates a clean, production-ready React folder structure.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useReducer` & `useContext` Hooks

## Status

Completed - Day 134