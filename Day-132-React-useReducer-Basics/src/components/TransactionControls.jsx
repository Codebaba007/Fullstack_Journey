// src/components/TransactionControls.jsx

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