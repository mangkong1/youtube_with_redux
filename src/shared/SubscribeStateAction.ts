export const setSubscribeState = (subscribeState: boolean) => {
  return {
    type: "SET_SUBSCRIBE_STATE",
    subscribeState: subscribeState,
  };
};
