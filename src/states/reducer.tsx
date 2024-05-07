import { createStore } from "redux";

interface State {
  user_data: any | null;
}

interface Action {
  type: string;
  user_data?: any;
}

const initialState: State = {
  user_data: null,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, user_data: action.user_data };
      break;
    case "DELETE_USER_DATA":
      return { ...state, user_data: null };
      break;
    default:
      return {
        user_data: null,
      };
  }
};

const store = createStore(reducer);

export default store;
