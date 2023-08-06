import { createStore } from "redux";
import AccountReducer from "./accountReducer";

const store = createStore(AccountReducer);

// store.dispatch({ type: "account/deposit", payload: 500 });
// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 200 });
// console.log(store.getState());

// store.dispatch({ type: "account/requestLoan", payload: 1100 });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// Creating action creators

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan() {
  return {
    type: "account/payLoan",
  };
}

store.dispatch(deposit(1000));
store.dispatch(withdraw(300));
store.dispatch(requestLoan(5000, "Buy a mobile"));
store.dispatch(payLoan());

console.log(store.getState());
