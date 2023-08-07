import { configureStore } from "@reduxjs/toolkit";

import AccountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    account: AccountReducer,
  },
});
export default store;

/*
import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
*/
