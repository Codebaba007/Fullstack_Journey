# Day 133 - React `useReducer` Dynamic Inputs & Complex Payloads

## Overview

This project expands Day 132's Digital Wallet by combining **local form state (`useState`)** with **centralized reducer state (`useReducer`)**. Users can submit custom deposit or withdrawal amounts with descriptive notes, inspect a live transaction history list, and delete individual entries while keeping the account balance automatically synchronized.

The application allows users to:

- Enter custom transaction amounts, select transaction types (`deposit` or `withdraw`), and attach notes.
- Dispatch structured object payloads (`{ kind, amount, note }`) to `accountReducer`.
- Maintain an immutable `history` array of transaction records (`[newTransaction, ...state.history]`).
- Delete individual transactions by `id` while validating that removing a deposit does not cause a negative balance.
- Compute derived totals (`totalDeposits`, `totalWithdrawals`) directly from `state.history`.

## Concepts Learned

- Passing multi-property objects inside `action.payload`
- Combining local component `useState` (for form inputs) with `useReducer` (for shared application state)
- Immutable array updates in reducers using spread (`[newItem, ...state.history]`) and `.filter()`
- Reversing state changes safely when deleting records (`DELETE_TRANSACTION`)
- Computing derived statistics (`totalDeposits`, `totalWithdrawals`) during render without duplicating state

## Project Structure

```text
Day-133-React-useReducer-Payloads/
├── src/
│   ├── components/
│   │   ├── AccountSummary.jsx
│   │   ├── TransactionForm.jsx
│   │   └── TransactionHistory.jsx
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

### 1. Reducer & Immutable Array Logic

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
  message: "Enter an amount and note below to record a transaction.",
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
        note: note.trim() || (kind === "deposit" ? "Cash Deposit" : "Cash Withdrawal"),
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
          message: "Cannot delete this deposit because those funds were already spent.",
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

### 2. Root Component & Derived Totals

File: `src/App.jsx`

```jsx
import { useReducer } from "react";
import "./App.css";
import { accountReducer, initialState } from "./reducers/accountReducer";
import AccountSummary from "./components/AccountSummary";
import TransactionForm from "./components/TransactionForm";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [state, dispatch] = useReducer(accountReducer, initialState);

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

      <AccountSummary state="{state}" totalDeposits="{totalDeposits}" totalWithdrawals="{totalWithdrawals}"/>

      <TransactionForm dispatch="{dispatch}"/>

      <TransactionHistory dispatch="{dispatch}" history="{state.history}"/>
    </div>
  );
}

export default App;
```

### 3. Account Summary Component

File: `src/components/AccountSummary.jsx`

```jsx
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
```

### 4. Dynamic Form with Local State

File: `src/components/TransactionForm.jsx`

```jsx
import { useState } from "react";

function TransactionForm({ dispatch }) {
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
      <h2>New Transaction</h2>

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

### 5. Transaction History List

File: `src/components/TransactionHistory.jsx`

```jsx
function TransactionHistory({ history, dispatch }) {
  return (
    <div className="card">
      <h2>Transaction History ({history.length})</h2>

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

1. `TransactionForm.jsx` captures temporary keystrokes in three local `useState` hooks (`kind`, `amount`, `note`).
2. Submitting the form converts `amount` to a `Number` and dispatches `{ type: "ADD_TRANSACTION", payload: { kind, amount, note } }`.
3. `accountReducer.js` validates the amount and available balance, creates a new transaction object with `Date.now()`, prepends it to `state.history`, and returns the updated state.
4. `App.jsx` recalculates `totalDeposits` and `totalWithdrawals` from `state.history` on every render and distributes updated props to `AccountSummary` and `TransactionHistory`.
5. Clicking **Delete** in `TransactionHistory` dispatches `{ type: "DELETE_TRANSACTION", payload: item.id }`, allowing the reducer to reverse the transaction's effect on `balance` and filter it out of `history`.

## Key Takeaways

- Keep temporary form keystrokes in local `useState` and only dispatch to `useReducer` when the user commits an action (submitting the form).
- Always convert HTML `<input type="number">` values with `Number(...)` before sending them to a reducer, because HTML inputs always return strings (`"200"` + `500` would become `"500200"`).
- Never mutate arrays inside a reducer with `.push()` or `.splice()`; always return new arrays using spread (`[newItem, ...state.history]`) and `.filter()`.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useReducer` & `useState` Hooks

## Status

Completed - Day 133