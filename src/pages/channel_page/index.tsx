import S from "./styles";

import ChannelRouter from "./views/ChannelRouter";

import ChannelTab from "../../features/channel_tab/";
import ChannelInfo from "../../features/channel_info/";

const ChannelPage = () => {
  return (
    <S.MainChannelContainer>
      <S.ChannelContainer>
        <ChannelInfo subscribeState={true} channelMainImgSrc="" channelImgSrc="" channelName="" />
        <ChannelTab />
        <ChannelRouter />
      </S.ChannelContainer>
    </S.MainChannelContainer>
  );
};

export default ChannelPage;
