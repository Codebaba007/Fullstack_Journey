// src/components/TransactionForm.jsx

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