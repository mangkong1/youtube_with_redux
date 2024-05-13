import { useDispatch } from "react-redux";

import S from "./styles";

import { DataType } from "../../features/channel_home/services/ChannelHomeData";
import { setSubscribeState } from "../../shared/states/subscribe_state/SubscribeStateAction";

interface SetSubscribeStateProps {
  subscribeState: boolean;
  data: DataType; // DataType은 이전에 정의한 타입입니다.
  toggleOnText: string;
  toggleOffText: string;
}

const ToggleBtn = (props: SetSubscribeStateProps) => {
  const dispatch = useDispatch(); // 리덕스 store상태 변경 가능

  const handleSubscribe = () => {
    dispatch(setSubscribeState(!props.subscribeState));
  };
  // $active는 styled-components에서 props를 받아서 css를 적용할 때 사용하는 문법입니다.
  return (
    <S.ToggleBtnContainer $active={props.subscribeState} onClick={handleSubscribe}>
      {props.subscribeState ? props.toggleOnText : props.toggleOffText}
    </S.ToggleBtnContainer>
  );
};

export default ToggleBtn;
