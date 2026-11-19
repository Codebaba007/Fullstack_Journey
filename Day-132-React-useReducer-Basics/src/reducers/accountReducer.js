export const initialState = {
    balance: 500,
    loan: 0,
    transactions: [],
    message:"Account is ready"
};
export function accountReducer(state, action) {
    switch (action.type){
        case "DEPOSIT":
            return{
                ...state,
                balance: state.balance + action.payload,
                transactions: [state.transactions +1],
                message: `Deposited ${action.payload} successfully.`,
            };
        case "WITHDRAW":
                if(state.balance < action.payload){
                    return{
                        ...state,
                        message: "Insufficient balance for withdrawal.",
                    };
                }
                return{
                    ...state,
                    balance: state.balance - action.payload,
                    transactions: [state.transactions +1],
                    message: `Withdrew ${action.payload} successfully.`,
                };
        case "REQUEST_LOAN":
                if(state.loan > 0){
                    return{
                        ...state,
                        message: "Loan request denied. You already have an active loan.",
                    };
                }
                return{
                    ...initialState,
                    message: `Loan of ${action.payload} requested successfully.`,
                };
        default:
            return state;
    }
}