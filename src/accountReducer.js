const initialStateAccount = {
  balance: 0,
  loan: 0,
};

export default function AccountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    default:
      return state;
  }
}
