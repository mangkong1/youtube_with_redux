// import { createStore } from "redux";

interface State {
  user_data: any | null;
}

interface Action {
  type: string;
  data?: any;
}

const initialState: State = {
  user_data: null,
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, user_data: action.data };
      break;
    case "DELETE_USER_DATA":
      return { ...state, user_data: null };
      break;
    default:
      return initialState;
  }
};

// export const store = createStore(reducer);
