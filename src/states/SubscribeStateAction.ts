export const SET_SUBSCRIBE_STATE = "SET_SUBSCRIBE_STATE";

export const setSubscribeState = (subscribeState: boolean) => ({
  type: SET_SUBSCRIBE_STATE,
  subscribeState: subscribeState,
});
