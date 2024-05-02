import React from "react";
import * as S from "./styles/ChannelInfoStyle";

interface ChannelInfoProps {
  data: {
    channelMainImgSrc: string;
    channelImgSrc: string;
    channelName: string;
  };
  children?: React.ReactNode;
}

const ChannelInfo = (props: ChannelInfoProps) => {
  const { channelMainImgSrc, channelImgSrc, channelName } = props.data;
  const { children } = props;

  return (
    <>
      <S.ChannelMainImg src={channelMainImgSrc} />
      <S.ChannelMainInfo>
        <S.ChannelProfileImg src={channelImgSrc} />
        <S.ChannelProfileInfo>
          <S.ChannelProfileName>{channelName}</S.ChannelProfileName>
          <S.ChannelProfileContent>{channelName}의 채널입니다! 반갑습니다</S.ChannelProfileContent>
          <S.ChannelProfileContent>구독자 11만명, 동영상 25개</S.ChannelProfileContent>
          {children}
        </S.ChannelProfileInfo>
      </S.ChannelMainInfo>
    </>
  );
};

export default ChannelInfo;
