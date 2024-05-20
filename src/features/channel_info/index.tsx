import S from "./styles";

import ToggleBtn from "@shared/ui/onoff_btn";

interface ChannelInfoProps {
  data: {
    channelMainImgSrc: string;
    channelImgSrc: string;
    channelName: string;
  };
}

const ChannelInfo: React.FC<ChannelInfoProps> = (props) => {
  const { channelMainImgSrc, channelImgSrc, channelName } = props.data;

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
