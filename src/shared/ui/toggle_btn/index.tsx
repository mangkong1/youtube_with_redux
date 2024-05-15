import { atom, useRecoilState } from "recoil";

import S from "./styles";

// import { DataType } from "@features/channel_home/services/ChannelHomeData";

interface SetSubscribeStateProps {
  // subscribeState: boolean;
  // data: DataType; // DataType은 이전에 정의한 타입입니다.
  toggleOnText: string;
  toggleOffText: string;
}

const toggleState = atom({
  key: "toggleState",
  default: false,
});

const ToggleBtn: React.FC<SetSubscribeStateProps> = ({ toggleOnText, toggleOffText }) => {
  const [toggle, setToggle] = useRecoilState(toggleState);

  const toggleActive = () => {
    setToggle(!toggle);
  };

  return (
    <S.ToggleBtnContainer $active={toggle} onClick={toggleActive}>
      {toggle ? toggleOnText : toggleOffText}
    </S.ToggleBtnContainer>
  );
};

export default ToggleBtn;
