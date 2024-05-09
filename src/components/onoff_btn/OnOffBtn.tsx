import React from "react";
// import { useSetSubscribeState } from "./hooks/SetSubscribeState";
import { ToggleBtnContainer } from "./styles/OnOffBtnStyle";
import { DataType } from "../../features/channel_home/services/ChannelHomeData";
import { setSubscribeState } from "../../states/SubscribeStateAction";
import { useDispatch } from "react-redux";

interface SetSubscribeStateProps {
  subscribeState: boolean;
  data: DataType; // DataType은 이전에 정의한 타입입니다.
  toggleOnText: string;
  toggleOffText: string;
}

// const ToggleBtn = (props: SetSubscribeStateProps) => {
//   const { isSubscribe, handleSubscribe } = useSetSubscribeState(props);

//   return (
//     <ToggleBtnContainer $active={isSubscribe} onClick={handleSubscribe}>
//       {isSubscribe ? props.toggleOnText : props.toggleOffText}
//     </ToggleBtnContainer>
//   );
// };

const ToggleBtn = (props: SetSubscribeStateProps) => {
  const dispatch = useDispatch(); // Get the dispatch function

  const handleSubscribe = () => {
    dispatch(setSubscribeState(!props.subscribeState));
  };

  return (
    <ToggleBtnContainer $active={props.subscribeState} onClick={handleSubscribe}>
      {props.subscribeState ? props.toggleOnText : props.toggleOffText}
    </ToggleBtnContainer>
  );
};

export default ToggleBtn;
