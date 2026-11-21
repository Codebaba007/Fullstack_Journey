// src/components/TransactionHistory.jsx

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
            <li key={item.id} className={`history-item ${item.kind}`}>
              <div className="history-info">
                <span className="history-note">{item.note}</span>
                <span className={`history-amount ${item.kind}`}>
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