import React from "react";
import { useSetSubscribeState } from "./hooks/SetSubscribeState";
import { SubscribeBtnContainer } from "./styles/OnOffBtnStyle";
import { DataType } from "../features/channel_home/services/ChannelHomeData"; // 실제 경로로 바꿔주세요.

interface SetSubscribeStateProps {
  subscribeState: boolean;
  data: DataType; // DataType은 이전에 정의한 타입입니다.
}

const SubscribeBtn = (props: SetSubscribeStateProps) => {
  const { isSubscribe, handleSubscribe } = useSetSubscribeState(props);

  return (
    <SubscribeBtnContainer $active={isSubscribe} onClick={handleSubscribe}>
      {isSubscribe ? "구독 취소" : "구독"}
    </SubscribeBtnContainer>
  );
};

export default SubscribeBtn;
