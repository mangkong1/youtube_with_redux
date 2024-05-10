import React from "react";
import { MainChannelContainer, ChannelContainer } from "./styles/ChannelStyle";
import ChannelTab from "../../features/channel_tab/ChannelTab";
import ChannelInfo from "../../features/channel_info/";
import ChannelRouter from "./views/ChannelRouter";

const ChannelPage = () => {
  return (
    <MainChannelContainer>
      <ChannelContainer>
        <ChannelInfo subscribeState={true} channelMainImgSrc="" channelImgSrc="" channelName="" />
        <ChannelTab />
        <ChannelRouter />
      </ChannelContainer>
    </MainChannelContainer>
  );
};

export default ChannelPage;
