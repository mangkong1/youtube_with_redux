import React from "react";
import { useSetSubscribeState } from "./hooks/SetSubscribeState";
import { ToggleBtnContainer } from "./styles/OnOffBtnStyle";
import { DataType } from "../features/channel_home/services/ChannelHomeData"; // 실제 경로로 바꿔주세요.

interface SetSubscribeStateProps {
  subscribeState: boolean;
  data: DataType; // DataType은 이전에 정의한 타입입니다.
  toggleOnText: string;
  toggleOffText: string;
}

const ToggleBtn = (props: SetSubscribeStateProps) => {
  const { isSubscribe, handleSubscribe } = useSetSubscribeState(props);

  return (
    <ToggleBtnContainer $active={isSubscribe} onClick={handleSubscribe}>
      {isSubscribe ? props.toggleOnText : props.toggleOffText}
    </ToggleBtnContainer>
  );
};

export default ToggleBtn;
