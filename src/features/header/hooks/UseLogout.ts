import { useDispatch } from "react-redux";

import { deleteUserData } from "../../../states/login_state/LoginAction";

const useLogout = () => {
  const dispatch = useDispatch();

  const request = () => {
    dispatch(deleteUserData());
  };

  return request;
};

export default useLogout;
