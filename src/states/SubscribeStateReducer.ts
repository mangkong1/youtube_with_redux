import { createStore } from "redux";

interface SubscribeState {
  subscribeState: boolean;
}

interface SubscribeAction {
  type: string;
  subscribeState: boolean;
}

const initialSubscribeState: SubscribeState = {
  subscribeState: false,
};

export const subscribeStateReducer = (state: SubscribeState = initialSubscribeState, action: SubscribeAction): SubscribeState => {
  switch (action.type) {
    case "SET_SUBSCRIBE_STATE":
      return { ...state, subscribeState: action.subscribeState };
    default:
      return { subscribeState: false };
  }
};

export const Store = createStore(subscribeStateReducer);
