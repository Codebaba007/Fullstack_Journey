# Day 132 - React `useReducer` Basics (Digital Wallet)

## Overview

This project introduces React's **`useReducer`** hook as a clean, predictable alternative to managing multiple related `useState` hooks. By separating state transition rules into a pure reducer function (`accountReducer.js`), the application enforces business rules—such as preventing overdrafts, blocking duplicate loans, and disallowing account resets while a loan is unpaid—without cluttering UI components.

The application allows users to:

- Manage interconnected wallet properties (`balance`, `loan`, `transactions`, `message`) inside a single state object.
- Dispatch structured action objects (`{ type, payload }`) from button controls.
- Enforce validation rules inside a pure reducer `switch` statement.
- Display real-time net worth, account stats, and status feedback across modular components.

## Concepts Learned

- Initializing `useReducer(reducer, initialState)` in `App.jsx`
- Designing pure reducer functions `(state, action) => newState` using immutable state updates (`...state`)
- Dispatching typed actions (`DEPOSIT`, `WITHDRAW`, `REQUEST_LOAN`, `PAY_LOAN`, `RESET_ACCOUNT`) with optional `payload` data
- Separating pure JavaScript business logic (`src/reducers/`) from React UI components (`src/components/`)
- Passing `state` down to display components and `dispatch` down to interactive control components

## Project Structure

```text
Day-132-React-useReducer-Basics/
├── src/
│   ├── components/
│   │   ├── AccountSummary.jsx
│   │   └── TransactionControls.jsx
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

### 1. Initial State & Reducer Rulebook

File: `src/reducers/accountReducer.js`

```javascript
export const initialState = {
  balance: 500,
  loan: 0,
  transactions: 0,
  message: "Account is active and ready.",
};

export function accountReducer(state, action) {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: state.transactions + 1,
        message: `Deposited $${action.payload} successfully.`,
      };

    case "WITHDRAW":
      if (state.balance < action.payload) {
        return {
          ...state,
          message: `Cannot withdraw $${action.payload}. Insufficient balance!`,
        };
      }

      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: state.transactions + 1,
        message: `Withdrew $${action.payload} successfully.`,
      };

    case "REQUEST_LOAN":
      if (state.loan > 0) {
        return {
          ...state,
          message: "Loan denied! Please pay off your current loan first.",
        };
      }

      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
        transactions: state.transactions + 1,
        message: `Approved! Borrowed $${action.payload}.`,
      };

    case "PAY_LOAN":
      if (state.loan === 0) {
        return {
          ...state,
          message: "You have no active loan to pay.",
        };
      }

      if (state.balance < state.loan) {
        return {
          ...state,
          message: `Need $${state.loan} in balance to pay off your loan.`,
        };
      }

      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        transactions: state.transactions + 1,
        message: "Loan paid off in full!",
      };

    case "RESET_ACCOUNT":
      if (state.loan > 0) {
        return {
          ...state,
          message: "Cannot reset account while you have an unpaid loan.",
        };
      }

      return {
        ...initialState,
        message: "Account reset to initial $500 balance.",
      };

    default:
      return state;
  }
}
```

### 2. Root Component & Reducer Connection

File: `src/App.jsx`

```jsx
import { useReducer } from "react";
import "./App.css";
import { accountReducer, initialState } from "./reducers/accountReducer";
import AccountSummary from "./components/AccountSummary";
import TransactionControls from "./components/TransactionControls";

function App() {
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

      <AccountSummary state="{state}"/>

      <TransactionControls dispatch="{dispatch}"/>
    </div>
  );
}

export default App;
```

### 3. Read-Only Summary Component

File: `src/components/AccountSummary.jsx`

```jsx
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
```

### 4. Action Dispatch Controls

File: `src/components/TransactionControls.jsx`

```jsx
function TransactionControls({ dispatch }) {
  return (
    <div className="card">
      <h2>Account Actions</h2>
      <p>Click any button below to dispatch an action to the reducer:</p>

      <div className="button-group">
        <button
          className="success"
          onClick={() => dispatch({ type: "DEPOSIT", payload: 150 })}
        >
          Deposit $150
        </button>

        <button
          onClick={() => dispatch({ type: "WITHDRAW", payload: 100 })}
        >
          Withdraw $100
        </button>

        <button
          className="secondary"
          onClick={() => dispatch({ type: "REQUEST_LOAN", payload: 500 })}
        >
          Request $500 Loan
        </button>

        <button
          className="secondary"
          onClick={() => dispatch({ type: "PAY_LOAN" })}
        >
          Pay Off Loan
        </button>

        <button
          className="danger"
          onClick={() => dispatch({ type: "RESET_ACCOUNT" })}
        >
          Reset Account
        </button>
      </div>
    </div>
  );
}

export default TransactionControls;
```

## How It Works

1. `App.jsx` initializes `useReducer(accountReducer, initialState)`, receiving the live `state` object and the `dispatch` function.
2. `App.jsx` computes derived net worth (`state.balance - state.loan`) in its top-level card, passes `state` to `AccountSummary`, and passes `dispatch` to `TransactionControls`.
3. Clicking any button in `TransactionControls` dispatches an action object describing what happened (`{ type, payload }`).
4. React invokes `accountReducer(currentState, action)`, which validates the operation and returns a brand-new state object without mutating the old one.
5. `App.jsx` and `AccountSummary.jsx` automatically re-render with the updated balance, loan, transaction counter, and status banner.

## Key Takeaways

- `useReducer` is ideal when a single user action updates multiple state properties simultaneously or requires conditional validation rules.
- Reducers must be **pure functions**: they never mutate `state` directly (`state.balance += 100` is forbidden); instead, they return a new object (`{ ...state, balance: state.balance + 100 }`).
- Separating `src/reducers/` from `src/components/` makes business logic easy to read, debug, and reuse without touching UI markup.

## Technologies Used

- React 19
- Vite
- JavaScript (ES6+)
- CSS3
- React `useReducer` Hook

## Status

Completed - Day 132