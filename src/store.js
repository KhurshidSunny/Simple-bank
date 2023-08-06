import { createStore } from "redux";
import { combineReducers } from "redux";
import AccountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: AccountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
