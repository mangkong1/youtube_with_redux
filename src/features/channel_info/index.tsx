import { useParams } from "react-router-dom";

import S from "./styles";
import { Data } from "./services/ChannelInfoData";
import { DataType } from "./services/ChannelInfoData";

import ToggleBtn from "@shared/onoff_btn";

const ChannelInfo = () => {
  const { channelName } = useParams();
  const filteredData = Data.find((elem) => elem.channelName === channelName);
  const { channelMainImgSrc, channelImgSrc } = filteredData || { channelMainImgSrc: "", channelImgSrc: "" };

  return (
    <>
      <S.ChannelMainImg src={channelMainImgSrc} />
      <S.ChannelMainInfo>
        <S.ChannelProfileImg src={channelImgSrc} />
        <S.ChannelProfileInfo>
          <S.ChannelProfileName>{channelName}</S.ChannelProfileName>
          <S.ChannelProfileContent>{channelName}의 채널입니다! 반갑습니다</S.ChannelProfileContent>
          <S.ChannelProfileContent>구독자 11만명, 동영상 25개</S.ChannelProfileContent>
          <ToggleBtn toggleOnText="구독 취소" toggleOffText="구독" />
        </S.ChannelProfileInfo>
      </S.ChannelMainInfo>
    </>
  );
};

export default ChannelInfo;
