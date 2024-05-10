// import { createStore } from "redux";

interface SubscribeState {
  subscribeState: boolean;
}

interface SubscribeAction {
  type: string;
  subscribeState: boolean;
}

const initialState: SubscribeState = {
  subscribeState: false,
};

export const subscribeStateReducer = (state: SubscribeState = initialState, action: SubscribeAction) => {
  console.log(state);
  switch (action.type) {
    case "SET_SUBSCRIBE_STATE":
      return { ...state, subscribeState: !state.subscribeState };
    default:
      return state;
  }
};

// export const Store = createStore(subscribeStateReducer);
