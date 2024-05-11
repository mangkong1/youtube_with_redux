import { combineReducers } from "redux";
import { createStore } from "redux";

import { subscribeStateReducer } from "./subscribe_state/SubscribeStateReducer";
import { reducer } from "./login_state/LoginReducer";

export const RootReducer = combineReducers({
  subscribeReducer: subscribeStateReducer,
  userReducer: reducer,
});

export const Store = createStore(RootReducer);
