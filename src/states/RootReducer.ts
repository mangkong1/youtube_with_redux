import { combineReducers } from "redux";
import { subscribeStateReducer } from "./SubscribeStateReducer";
import { reducer } from "./reducer";
import { createStore } from "redux";

export const RootReducer = combineReducers({
  subscribeReducer: subscribeStateReducer,
  userReducer: reducer,
});

export const Store = createStore(RootReducer);
