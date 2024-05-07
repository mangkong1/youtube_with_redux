interface UserData {
  id: number;
  name: string;
}

export const setUserData = (user_data: UserData) => {
  return {
    type: "SET_USER_DATA",
    user_data,
  };
};

export const deleteUserData = () => {
  return {
    type: "DELETE_USER_DATA",
  };
};
