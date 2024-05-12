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
  //state는 이전 것을 그대로 가져오면서 초기 값을 null로 가져오고 싶으면 initialState를 정의해 놓는 것이 좋다

  switch (action.type) {
    case "SET_USER_DATA":
      return { ...state, user_data: action.data };
      break;
    case "DELETE_USER_DATA":
      return { ...state, user_data: null };
      break;
    default:
      return state;
  }
};

// export const store = createStore(reducer);
