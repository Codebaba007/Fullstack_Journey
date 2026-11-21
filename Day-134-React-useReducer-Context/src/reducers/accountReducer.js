// src/reducers/accountReducer.js

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