import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import S from "./styles";
import Data from "./services/ChannelInfoData";

import ToggleBtn from "../../components/onoff_btn/";

interface SubscribeStateProps {
  subscribeReducer: ChannelInfoProps;
}

interface ChannelInfoProps {
  channelMainImgSrc: string;
  channelImgSrc: string;
  channelName: string;
  children?: React.ReactNode;
  subscribeState: boolean;
}

const ChannelInfo = (props: ChannelInfoProps) => {
  const { channelName } = useParams();
  const filteredData = Data.find((elem) => elem.channelName === channelName);
  const { channelMainImgSrc, channelImgSrc } = filteredData || { channelMainImgSrc: "", channelImgSrc: "" };
  const subscribeState = useSelector((state: SubscribeStateProps) => state.subscribeReducer.subscribeState); //리덕스 store에서 subscribe 상태를 가져옴

  return (
    <>
      <S.ChannelMainImg src={channelMainImgSrc} />
      <S.ChannelMainInfo>
        <S.ChannelProfileImg src={channelImgSrc} />
        <S.ChannelProfileInfo>
          <S.ChannelProfileName>{channelName}</S.ChannelProfileName>
          <S.ChannelProfileContent>{channelName}의 채널입니다! 반갑습니다</S.ChannelProfileContent>
          <S.ChannelProfileContent>구독자 11만명, 동영상 25개</S.ChannelProfileContent>
          {filteredData && <ToggleBtn subscribeState={subscribeState} data={filteredData} toggleOnText="구독 취소" toggleOffText="구독" />}
        </S.ChannelProfileInfo>
      </S.ChannelMainInfo>
    </>
  );
};

export default ChannelInfo;
