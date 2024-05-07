import React from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../states/action";

const useLogin = () => {
  const dispatch = useDispatch();

  const request = () => {
    const result = {
      id: 1,
      name: "민수",
    };

    dispatch(setUserData(result));
  };

  return request;
};

export default useLogin;
